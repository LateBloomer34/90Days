#include<iostream>
using namespace std;

int next_permu(vector<int>arr){
    int n = arr.size();
    next_permutation(arr.begin() , arr.end());
    for (int i = 0 ; i< n ; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}

int main (){
    vector<int>arr = {3,2,1};
    next_permu(arr);
}