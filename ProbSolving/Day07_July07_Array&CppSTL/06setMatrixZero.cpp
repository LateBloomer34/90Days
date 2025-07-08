#include<iostream>
using namespace std;

int setZero(vector<vector<int>> &arr , int n , int m){
    int n = arr.size();

    for (int i = 0 ; i < n ; i++){
        for (int j =0  ; j < n  ; j++){
            if (arr[i][j]==0){
                arr[i]=0;
                arr[j]=0;
            }
        }
    }
        for (int i = 0 ; i < n ; i++){
            for (int j = 0 ; j < n ; j++){
                cout<<arr[i][j]<<" ";
            }
        }
return 0;
}

int main (){
    vector<vector<int>>arr = {{1,1,1},{1,0,1,},{1,1,1}};
    int n = arr.size();
    int m = arr[0].size();
    setZero(arr, n , m);
    // cout<<n<<endl;
    // cout<<m<<endl;

}