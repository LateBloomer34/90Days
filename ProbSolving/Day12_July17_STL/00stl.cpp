#include<iostream>
using namespace std;

void sortt(vector<int> &arr){
    sort( arr.begin(), arr.end());  // sort in ascending order
       // sort( arr.begin(), arr.end(), greater<int>());   // decending order


      for (int i =0 ; i<arr.size()  ; i++){
        cout<<arr[i]<<" ";
    }

cout<<endl;
    int start = 0 ; 
    int end = arr.size()-1;
    while(start<end){
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
    for (int i =0 ; i<arr.size()  ; i++){
        cout<<arr[i]<<" ";
    }

  
}

int main (){
    vector<int>arr = {0,4,6,7,8,1,2,3,5};
    sortt(arr);
}