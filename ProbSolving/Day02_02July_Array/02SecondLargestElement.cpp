#include<iostream>
using namespace std;

int secondLargest(vector<int>arr){
    int largest = arr[0];
    int secLar = arr[0];

    int n = arr.size();
    for (int i = 0 ; i < n ; i++){
        if (arr[i]>largest ){
            secLar = largest;
            largest = arr[i];
        }
        else if (arr[i]>secLar && secLar<largest){
            secLar = arr[i];
        }
    }
    return secLar;
}

int main(){
    vector<int>arr = {3,2,4,15,17,6,0};
    cout<<secondLargest(arr);
}