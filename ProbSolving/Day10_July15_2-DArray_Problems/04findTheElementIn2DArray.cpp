#include<iostream>
using namespace std;

string findElement(vector<vector<int>>arr , int element){
    int rowLength = arr.size();
    int colLength = arr[0].size();

    for (int i = 0 ; i < rowLength ; i++){
        for (int j =0 ; j < colLength ; j++){
            if (arr[i][j]== element){
                return "present in array";
            }
        }
    }
return "not present in element";
}

int main (){
    vector<vector<int>>arr = {{10,12,34,42},{54,25,76,79},{37,84,90,56}};
    int element = 70;
    cout<<findElement(arr , element);
}