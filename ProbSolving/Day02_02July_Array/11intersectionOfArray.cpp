// intersection means common element of array

#include<iostream>
using namespace std;

int inter(vector<int>arr1 , vector<int>arr2){
        int n1 = arr1.size(); //5
        int n2 = arr2.size();  //3
        vector<int>result;
        int i = 0 ; 
        int j = 0 ;
//  vector<int>arr1 = {1,2,3,4,5};
//     vector<int>arr2 = {2,7};
while(i<n1 && j<n2){
    if (arr1[i]<arr2[j]){  
        i++;
    }
    else if (arr2[j]<arr1[i]){
        j++;
    }
    else{
         if(result.empty() || result.back()!= arr1[i]){
            result.push_back(arr1[i]);
        }
        i++;
        j++;
    }
}
for (int i = 0 ; i < result.size() ; i++){
    cout<<result[i];
}
return 0;
}

int main (){
    vector<int>arr1 = {1,2,3,4,5};
    vector<int>arr2 = {1,2,7};
    inter(arr1 , arr2);
}