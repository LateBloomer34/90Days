#include<iostream>
using namespace std;


// approach 1 - 
/*
int missing(vector<int>arr){
    int n = arr.size();
    for (int i = 0  ; i<n; i ++){
        if (arr[i]!=arr[i+1]-1){
            return arr[i]+1;
        }
    }
   return -1; 
}
*/

//approach 2 -using ex-or

int missing(vector<int>arr){
    int n = arr.size();
    int arrExor = 0;
    for (int i = 0 ; i < n ; i++){
        arrExor = arrExor^arr[i];
    }
    int totExor = 0;
    for (int i = arr[0] ; i <arr[n] ; i++ ){
        totExor=totExor^arr[i];
    }
    int result = arrExor^totExor;

    return result;
}


int main (){
    vector<int>arr = {1,2,3,5,6,7};
    cout<<missing (arr);
}