#include<iostream>
using namespace std;

pair<int,int> majority(vector<int>arr){
    int n = arr.size();
    int count = 0 ;
    int ele = 0;

    for (int i = 0  ; i < n ; i++){
        if (count==0 ){
            count++;
            ele = arr[i];
        }
        else if (ele == arr[i]){
            count++;
        }
        else{
            count--;
        }
    }
        // for check majority is greater thn N/2 or not
        int numCount=0;
        for (int i = 0 ; i < n ; i++){
            if (arr[i] == ele){
                numCount++;
            }
        }
        if (numCount>n/2){
            return {ele, numCount};
        }
return {ele, -1};
}

int main (){
    vector<int>arr= {2,2,1,1,1,2,2,1,1,1,1,1,1,2,2,2,2,2,1};
    pair<int , int >result =majority(arr);
    cout<<"element "<<result.first<<" is present "<<result.second<< " times";
}