#include<iostream>
using namespace std;

vector<int> leader(vector<int>arr){
    int n = arr.size();
    vector<int>result;
    for (int i =n-1 ; i>= 0 ; i--){
        if (i == n-1){
        result.push_back(arr[n-1]);   //last element always present in leader
        }
      else if (arr[i]>result.back()){    // if array element is greater than result array's previos element
        result.push_back(arr[i]);           // move that element in result array
      }
    }
    return result;
}

int main (){
    vector<int >arr = {10, 22, 12, 3, 0, 6};
    vector<int>resu = leader(arr);
    for (int i = resu.size()-1 ; i >= 0 ; i--){
        cout<<resu[i]<<" ";
    }
}