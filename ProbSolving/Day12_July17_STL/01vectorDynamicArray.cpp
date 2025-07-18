#include<iostream>
using namespace std;


int main (){
    vector<int>arr = {1,2,3,4,5,6,7,8,9,};
    cout<<arr.size()<<" "<<endl;

    // to insert an element
    arr.push_back(9);
    cout<<arr.size()<<" "<<endl;
    for (int i =0. ; i < arr.size() ; i++){
        cout<<arr[i]<<" ";
    }
cout<<endl;
    // to remove element

        arr.pop_back();
        for (int i =0. ; i < arr.size() ; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    //  arr.pop_back(1);
    //     for (int i =0. ; i < arr.size() ; i++){
    //     cout<<arr[i]<<" ";
    // }


    for(int i = 0 ; i< 3;i++ ){
        arr.pop_back();
    }
    cout<<endl;

     for (int i =0. ; i < arr.size() ; i++){
        cout<<arr[i]<<" ";
    }


    for(int i = 0 ; i< 4;i++ ){
        arr.pop_back();
    }
    cout<<endl;

     for (int i =0. ; i < arr.size() ; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;


    // to print first element of an array
    cout<<arr.front();
    cout<<endl;

    /// to print last elemenet of an array
    cout<<arr.back();

    // to clear an array or ddelete all element from an array
        // after suing clear all value will vanished but capcity will remain same
    arr.clear();
    cout<<endl;
    cout<<"hello";
      for (int i =0. ; i < arr.size() ; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    cout<<"hello";
        cout<<endl;
        vector<int>brr = {1,2,3,4,5,6,7,8,9,};
        cout<<brr.front()<<endl;
        sort(brr.rbegin() , brr.rend());
        for (int i =0 ; i < brr.size(); i++){
            cout<<brr[i]<<" ";
        }


    // capacity of vector always in 2^n
    return 0 ; 

}