#include<iostream>
using namespace std;

int sort(vector<int>arr){
    int n = arr.size();
    vector<int>store(n+1 , 0);   // or we can change n with max value of an array


    // store the frequency
    for(int i =0 ;  i < n ; i++){
       int position = arr[i];
       store[position]++;
    }

    // print the number whose frequency more than zero

    for (int i = 0 ; i <=n ; i++){
        if (store[i]>0){
            for (int j = 0 ;j < store[i] ; j++ ){
                cout<<i<<" ";
            }
        }
    }
return 0;
}

int main (){
    vector<int>arr = {3,5,4,8,9,6,5,3,2};
    sort(arr);
}