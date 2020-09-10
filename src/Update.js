import React from 'react';
import { GoogleSpreadsheet } from "google-spreadsheet";

class Update extends React.Component{
    constructor(props){
        super(props);
        this.state={
          slideArr:[],
          pageArr:[]
        }
        this.pageArr=["Index","Form","Resource","Nonstop","Bungee","SSFWL","RM","BAM","SG"];
        this.SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
        this.CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
        this.PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
        this.getData('SLIDE'.toUpperCase(),this.pageArr);
    }
    getData = async (t1,t2Arr) => {
        try {
          const doc = new GoogleSpreadsheet(this.SPREADSHEET_ID);
          await doc.useServiceAccountAuth({
            client_email: this.CLIENT_EMAIL,
            private_key:  this.PRIVATE_KEY,
          });
          // loads document properties and worksheets
          await doc.loadInfo();
          const sheet1 = doc.sheetsByTitle[t1];
          await sheet1.loadCells('A:D');
          const rows1 = await sheet1.getRows();
          this.rowtoArray(rows1,'t1','SLIDE');
          t2Arr.map(async (t2)=>{
            t2=t2.toUpperCase();
            const sheet2 = doc.sheetsByTitle[t2];
            if(t2==='INDEX'||t2==='FORM'||t2==='RESOURCE')
              await sheet2.loadCells('A:C');
            else
              await sheet2.loadCells('A:D');
            const rows2 = await sheet2.getRows();
            this.rowtoArray(rows2,'t2',t2);
          })
        } catch (e) {
          console.error('Error: ', e);
        }
    };
    rowtoArray=(arr,name,table)=>{   
        let result=[];
        if(name==='t1'){
            arr.map(row=>{
                // if(table===row._rawData[0])
                    result.push(
                    {
                        'page': row._rawData[0],
                        'seq': row._rawData[1],
                        'title': row._rawData[2],
                        'sentence': row._rawData[3],
                    }
                );
                return null;
            })
            this.setState({slideArr:result});
        }else if(name==='t2'){
            if(table==='INDEX'||table==='FORM'||table==='RESOURCE'){
                arr.map(row=>{
                        result.push(
                        {
                            'title': row._rawData[0],
                            'path': row._rawData[1],
                            'link': row._rawData[2],
                        }
                    );
                    return null;
                })
            }else{
                arr.map(row=>{
                        result.push(
                        {
                            'date': row._rawData[0],
                            'title': row._rawData[1],
                            'subTitle': row._rawData[2],
                            'link': row._rawData[3],
                        }
                    );
                    return null;
                })
            }            
            this.setState({pageArr:result});
        } 
        console.log(name,table);
        console.log(JSON.stringify(result));     
    }
    render() {
      return (
        <div>
          {/* The corresponding component will show here if the current URL matches the path */}
          <h1>DataSheet Updated!</h1>
        </div>
      );
    }
  }
  
  export default Update;