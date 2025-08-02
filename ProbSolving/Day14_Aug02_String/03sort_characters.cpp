#include<iostream>
using namespace std;

// sort the charcters in O(n) T.C.
// A start from 65
// a start rom 97

int main (){
    vector<char>arr = {'A','B','F','S','C','B','C','D','A','B'};
    vector<int>result(26,0);
    for (int i = 0 ; i < arr.size() ; i++){
        int index = int(arr[i]) - 65;
        result[index]++;
    }

    for (int i = 0 ; i < result.size() ; i++){
            // cout<<i<<" "<<result[i]<<" "<<endl;
        
            if (result[i]>0){
                 for(int j = 0 ; j< result[i] ; j++){
                    cout<< char(i+65)<<" ";
                 }
    }
}
}