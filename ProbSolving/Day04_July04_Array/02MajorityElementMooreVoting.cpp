#include<iostream>
using namespace std;

pair<int,int> mooreVoting(vector<int>arr){
    int n = arr.size();
    int count = 0 ;
    int element;
    for (int i = 0 ; i< n ;i++){
        if (count == 0 ){
            count++;
            element = arr[i];
        }
        else if(arr[i]== element){
            count++;
        }
        else{
            count--;
        }
    }

    int eleCount = 0 ;
    for (int i = 0 ; i < n ; i++){
        if (arr[i]== element){
            eleCount++;
        }
    }
    if (eleCount>n/2){
        return {element, eleCount};
    }
return {-1 , -1};
}

int main (){
    vector<int>arr = {2,2,1,1,1,1,1,2,2};
    pair<int, int >result = mooreVoting(arr);
    cout<<result.first<<" element is present "<<result.second<<" times";
}