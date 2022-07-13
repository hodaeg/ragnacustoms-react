import react, {useState, useEffect} from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import './gridstyle.css';

export default function SongLibrary () {

    //const AlbumArtID = AlbumArt;
    //const AlbumArtLink = `https://ragnacustoms.com/covers/${AlbumArtID}.jpg`;

    const [rowData, setRowData] = useState([
        {name: "Song Title", authorName: "Artist", countVotes: "0", lastDateUpload: "n/a", downloads: null},
    ]);

    const [columnDefs, setColumnDefs] = useState([
        { headerName: "",
          field: 'id',
          width: 75,
          cellRenderer: params => {
            // put the value in bold
            console.log(params)
            return <img className="coverArt" src={`https://ragnacustoms.com/covers/${params.data.id}.jpg`}/>
        }
        },
        { headerName: "Song Title", width: 275, field: 'name', cellClass: 'songTitle' },
        { headerName: "Artist", field: 'authorName', width: 200 },
        { headerName: "Mapper", field: 'levelAuthorName', flex: 1, cellClass: 'mapper' },
        { headerName: "Votes", field: 'countVotes', sortable: true, width: 100},
        { headerName: "Upload Date", field: 'lastDateUpload', sortable: true},
        { headerName: "Downloads", field: 'downloads', sortable: true, cellClass: 'Downloads'}
    ])

    useEffect(()=>{
        const responseRC=async()=>{
        const data = await axios.get(`https://api.ragnacustoms.com/rest-api/songs?page=28`);
        setRowData(data.data["hydra:member"])
    }
    responseRC()
    },[]);

    const rowClass = 'rows';
    const cellClass = 'songTitle';

    return (
    <div>
        <div className="slContainer">
            <h1>Song Library</h1>
            <div className="ag-theme-alpine" style={{height: '100%', width: '100%;'}}>
                <AgGridReact
                    rowClass={rowClass}
                    rowData={rowData}
                    rowSelection={'single'}
                    suppressRowClickSelection={true}
                    domLayout={'autoHeight'}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={20}>
                </AgGridReact>
            </div>
        </div>
    </div>
    )
}