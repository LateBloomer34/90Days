#include<iostream>
using namespace std;

int rotate(vector<vector<int>>arr){
    int n = arr.size();
    int m = arr[0].size();
    // cout<<n<<endl;
    // cout<<m<<endl;
    for (int i = 0 ; i < m ; i++){
        for (int j = 0 ; j<n ; j++){
            cout<<arr[j][i];
        }
        cout<<endl;
    }
return 0;
}

int main (){
    vector<vector<int>>arr = {{1,2,3,4},{5,6,7,8},{7,8,9,0}}; // initilization of 2-D array
    rotate(arr);
}