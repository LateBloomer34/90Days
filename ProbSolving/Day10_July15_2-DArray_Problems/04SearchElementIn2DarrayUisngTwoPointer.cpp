#include<iostream>
using namespace std;

pair<int ,int> findEle(vector<vector<int>>arr, int target){
        int col = arr[0].size(); 
        int row = arr.size();
        int i = row-1;
        int j = 0;

        while(i>=0 && j<=row){
            if (arr[i][j]== target){
                cout<<"target present at index ";
                return {i, j};
            }
            else if (target>arr[i][j]){
                j++;
            }
            else{
                i--;
            }
        }
cout<<"element not present ";
return {-1, -1};    
}

int main (){
    vector<vector<int>>arr = {{1,4,7,11,15},{2,5,8,12,19},{3,6,9,16,22},{10,13,14,17,24},{18,21,23,26,30}};
    int target = 55;
    pair<int ,  int >result =  findEle(arr, target);
    cout<< result.first<<" "<<result.second;
}