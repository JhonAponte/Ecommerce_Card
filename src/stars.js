export function Qualifier(stars){
    var qualification = "";
    for(let i = 1; i <= stars; i++){
        qualification += "<i class='bi bi-star-fill'></i>";
    }
    if(stars <5){
        for(let j = 1; j <= 5 - stars; j++){
            qualification += "<i class='bi bi-star-fill grey'></i>";
        }
    
    }
    
    return qualification;
}