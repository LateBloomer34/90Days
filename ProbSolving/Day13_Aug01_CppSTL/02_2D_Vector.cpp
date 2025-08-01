#include<iostream>
using namespace std;


int main (){
    vector<vector<int>>arr = {{1,2,3,4,5},
                                {2,3,4,5,6},
                            {3,4,5,6,7},
                            {4,5,6,7,8}};
    // for (auto x:arr){
    //     cout<<x<<" ";
    // }
    int row = arr.size();
    int col = arr[0].size();
    for (int i = 0 ; i < row ; i++){
        for (int j = 0 ; j < col ; j++){
            cout<<arr[i][j];

        }
        cout<<endl;
    }
    cout<<endl;
int co = 16;
    vector<vector<int>>brr(3 ,vector<int>(co , 4));
    for (int i = 0 ; i < brr.size() ; i++){
        for (int j = 0 ; j < brr[0].size() ; j++){
            cout<<brr[i][j];
        }
        cout<<endl; 
    }
}