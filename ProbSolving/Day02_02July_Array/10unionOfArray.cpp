#include<iostream>
using namespace std;

int unio(vector<int>arr1 , vector<int>arr2){
        int n1 = arr1.size(); //5
        int n2 = arr2.size();  //3
        vector<int>result;
        int i = 0 ; 
        int j = 0 ;

while (i<n1 && j <n2){
    if (arr1[i]<arr2[j]){
        if (result.empty()|| result.back()!= arr1[i]){
            result.push_back(arr1[i]);
        }
        i++;
    }
    else if (arr2[j]<arr1[i]){
        if (result.empty() || result.back()!= arr2[j]){
            result.push_back(arr2[j]);
        }
        j++;
    }
    else{
        if (result.empty()|| result.back()!= arr1[i]){
        result.push_back(arr1[i]);
    }
    i++;
    j++;
}
}
while(i<n1){
     if (result.empty()|| result.back()!= arr1[i]){
            result.push_back(arr1[i]);
        }
        i++;
}
while(j<n2){
     if (result.empty() || result.back()!= arr2[j]){
            result.push_back(arr2[j]);
        }
        j++;
}
    
for (int i =0 ; i < result.size() ; i++){
    cout<<result[i];
}  
return 0;
}

int main (){
    vector<int>arr1 = {3, 4, 6, 7, 9, 9};
    vector<int>arr2 = {1, 5, 7, 8, 8};
    unio(arr1 , arr2);
}