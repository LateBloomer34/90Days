#include<iostream>
using namespace std;

int rRotate(vector<int> &arr , int k ){
    int n = arr.size();
    // crate a vector of k size to store ight element
    vector<int>temp(k);
    for (int i = n-k ; i < n ; i++){
        temp[i-(n-k)]=arr[i];
    }

    // right roatet element ky k place
    for (int i =n-k-1 ; i>=0 ; i--){
        arr[i+k] = arr[i];
    }

    // move temp element in orignal array

    for (int i = 0 ; i< k ; i++ ){
        arr[i] = temp[i];
    }

return 0;
}

int main (){
    vector<int>arr = {1,2,3,4,5,6,7,8};
    int k = 3;
    rRotate(arr , k);
    for (int i = 0 ; i <arr.size() ; i++){
        cout<<arr[i]<<" ";
    }
}