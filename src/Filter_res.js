const a=[{'intensity':5,'country':'NorthAmerica','sector':'government','endyear':2047},{'intensity':6,'country':'NorthAmerica','sector':'government','endyear':2047}]
const params={'endyear':2047,
        'sector' :'government'
}
let fdata=[];
let flabel=[];
let result=[fdata,flabel];
// fdata is intensity data
// flabel is country data

function Filter_res(data){
    let f_res={};
    for(let i=0;i<data.length;i++){
        if(data[i]['sector']==='government' && data[i]['endyear']===2047 ){
            if(!f_res['country']){
                f_res['country']=data[i]['intensity'];
            }
            else{
                f_res['country']+=data[i]['intensity'];
            }
        }
    }
    flabel = Object.keys(f_res);
    fdata = Object.values(f_res);
    result=[fdata,flabel];
    console.log(result);
    return result;
}
Filter_res(a);