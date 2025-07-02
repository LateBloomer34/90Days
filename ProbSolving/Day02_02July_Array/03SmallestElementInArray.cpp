//largest element in an array

#include<iostream>
using namespace std ;

int largest(vector<int>arr){
    int n = arr.size();
    int minEle = arr[0];
    for (int i = 0 ; i < n ; i++){
        if(arr[i]<minEle){
            minEle = arr[i];
        }
    }
    return minEle;
}

int main (){
    vector<int>arr = {3,2,4,15,7,-1,6,0};
    cout<<largest(arr);
}