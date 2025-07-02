#include<iostream>
using namespace std;

int removeDupli(vector<int>&arr){
    int n = arr.size() ;
    int j = 0;
    if (n<=1){
        return j;
    }
    for(int i = 0 ; i < n ; i++){
        if (arr[j]!=arr[i]){
            j++;
            swap(arr[i], arr[j]);
        }
    }
    return j;
}

int main (){
    vector<int> arr = {0,0,0,0,0,0,1};
    int res = removeDupli(arr);
    for (int i = 0 ; i <= res ; i++){
        cout<<arr[i]<<" ";
    }
}