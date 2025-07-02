#include<iostream>
using namespace std;

int linearSearch(vector<int>arr, int target){
    int n = arr.size();
    for (int i = 0 ; i < n ; i++){
        if (arr[i]== target){
            return i;
        }
    }
    return -1;
}

int main (){
    vector<int>arr= {1,2,3,5,6};
    int target = 4;
    cout<<linearSearch(arr, target);
}