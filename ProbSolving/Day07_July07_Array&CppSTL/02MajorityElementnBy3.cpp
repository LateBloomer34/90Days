#include<iostream>
using namespace std;

pair<int, int> majority(vector<int>arr){
    int n = arr.size();
    int count = 0 ;
    int element;
    for (int i = 0 ; i<n ; i++){
        if (count ==0){
            count++;
            element = arr[i];   //{1,2,2,3,2};
        }
        else if (element ==arr[i]){
            count++;
        }
        else{
            count--;
        }
    }
    count= 0 ;
    for(int i =0 ; i< n ; i++){
        if (arr[i]==element){
            count++;
        }
    }
    if (count>=n/3){
        return {element, count};
    }
    return {0,  0 };
}

int main (){
    vector<int>arr = {1,2,2,2,3,3,3,3,3,2};
    pair<int , int>res = majority(arr);
    cout<<res.first<<" "<<res.second;
}