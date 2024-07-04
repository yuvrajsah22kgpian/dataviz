export function generate_List(data,x_item,y_item){
    let f_res={};
    for(let i=0;i<data.length;i++){
        if(data[i][x_item]!=''  && typeof data[i][y_item]==='number'){
            if(!f_res[data[i][x_item]]){
                f_res[data[i][x_item]]=data[i][y_item];
            }
            else{
                f_res[data[i][x_item]]+=data[i][y_item];
            }
        }
    }
    console.log(f_res);
    const flabel = Object.keys(f_res);
    const fdata = Object.values(f_res);
    const result=[fdata,flabel];
    return result;
}
