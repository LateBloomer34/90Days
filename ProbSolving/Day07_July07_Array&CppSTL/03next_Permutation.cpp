#include<iostream>
using namespace std;

vector<int> next_permutation(vector<int> &arr){
    int n = arr.size();
    vector<int>result(n);
   next_permutation(arr.begin() , arr.end());
    for (int i = 0 ; i < n ; i++){
        result.push_back(arr[i]);
    }
    return result;
}

int main(){
    vector<int>arr = {1,3,2};
    next_permutation(arr);
    for(int i = 0 ; i<arr.size(); i++){
        cout<<arr[i];
    }
}