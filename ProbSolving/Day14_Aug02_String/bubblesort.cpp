#include<iostream>
using namespace std;

int main (){
    vector<int>arr = {13,15,4,8,2,1,6};
    int n = arr.size();
    for (int i = 0; i < n ; i++){
        for (int j = 0 ; j < n-1 ; j++){
            if (arr[j+1]<arr[j]){
                swap(arr[j], arr[j+1]);
            }
        }
    }

    for (int i = 0 ; i < n ; i++){
        cout<< arr[i]<<" ";
    }
}