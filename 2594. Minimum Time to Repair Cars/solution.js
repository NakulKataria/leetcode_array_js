/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */

var repairCars = function(ranks, cars) {
    let low =1;
    let high =Math.min(...ranks)* cars*cars;//range for bs
    let ans=high;
    //to check if sol is possible at mid
    function isPossible(mid){
         let counter =0;
        for (let i=0; i<ranks.length;i++){
            let n=Math.floor(Math.sqrt(mid/ranks[i]));//car repaired by 1 mechanic in mid time
            counter+=n;//total car repaired in mid time
           if(counter>=cars)return true;
        }
        return false;
        }

    //bs
    while(low<=high){
        let mid= Math.floor((high +low)/2);
        // let counter =0;
        // for (let i=0; i<ranks.length;i++){
        //     let n=Math.floor(Math.sqrt(mid/ranks[i]));
        //     counter+=n;
        // }
        

        //updation of bs range
        if(isPossible(mid)){ans=mid;
        high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return ans;
    
};