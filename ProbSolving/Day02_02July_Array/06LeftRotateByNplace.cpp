#include<iostream>
using namespace std;

int lRotate(vector<int>arr , int k){
    int n = arr.size();
    vector<int>temp(k) ;
    for (int i = 0 ; i < k ; i++ ){
        temp[i]= arr[i];
    }
      
    for (int i = k ; i < n ; i++){
        arr[i-k]= arr[i];
    }
    for (int i = 0; i<k ; i++ ){
        arr[n-k+i] = temp[i];
    }
    for (int i = 0 ; i < n ; i++){
        cout<<arr[i]<<" ";
    }
return 0;
}

int main (){
    vector<int>arr = {1,2,3,4,5,6,7,8};
    int k;
    cout<<"enter the value of k";
    cin>>k;
    lRotate(arr, k);
}