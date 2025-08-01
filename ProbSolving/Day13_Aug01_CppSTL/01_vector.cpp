#include<iostream>
#include<vector>
using namespace std;
// int main (){
// vector<int>arr = {1,2,3,4,5,6,7,8};
// int n = arr.size();
// cout<<n<<endl;
// for(int i = 0 ; i < n ; i++){
//     cout<<arr[i]<<" ";
// }
// cout<<endl;
// arr.push_back(9);
// int m = arr.size();
// cout<<m<<endl;
// for(int i = 0 ; i < m ; i++){
//     cout<<arr[i]<<" ";
// }
// arr.pop_back();
// cout<<endl;
// cout<<arr.size();
// }

int main (){
    vector<int>arr = {};
    cout<<arr.size()<<endl;
    arr.push_back(1);
    cout<<arr.size()<<endl;

    vector<int>brr = {1,2,3,4,5,6};
    //to find first element of vector
    cout<<brr[0]<<endl;
    cout<<brr.front()<<endl;

    // to find last element

    cout<<"last ele "<<brr.back()<<endl;
    cout<<brr[brr.size()-1]<<endl;
for (int i = 0 ; i < brr.size() ; i++){
    cout<<brr[i]<<" ";
}
cout<<endl;
    brr.clear();
    cout<<"final array";
    for (int i = 0 ; i < brr.size() ; i++){
    cout<<brr[i]<<" ";
}
cout<<endl;
cout<<brr.size(); 

cout<<endl;
vector<int>crr = {4,8,5,3,2,1,7,6,9,8,1,2};
sort(crr.begin() , crr.end());
for (int i = 0 ; i < crr.size() ; i++){  
    cout<<crr[i]<<" ";
}
cout<<endl;
for (auto x:crr){
    cout<<x<<"  ";
}
cout<<"djshd "<<endl;
for (auto i = 0 ; i < crr.size() ; i++){  
    cout<<crr[i]<<" ";
}
cout<<endl;
// to add in front;
crr[3]=7;
for (auto x:crr){
    cout<<x;
}
cout<<endl;
// to insert element in start

crr.insert(crr.begin() , 0);
for (auto x:crr){
    cout<<x<<" ";
}
cout<<endl;
vector<int>add={9,4,5,6,8,4,5,6,2,1,2,3,0};
for (auto x:add){
    cout<<x<<" ";
}
cout<<endl;
sort(add.begin(), add.end());
for (auto x:add){
    cout<<x<<" ";
}cout<<endl;
sort(add.rbegin(), add.rend());
for (auto x:add){
    cout<<x<<" ";
}
add.pop_back();
cout<<endl<<add.size();
cout<<endl<<add.capacity();
cout<<endl;
for (auto x:add){
    cout<<x<<" ";
}
cout<<endl;
// to add element in mid;
add.insert(add.begin()+3 , 0);
for (auto x:add){
    cout<<x<<" ";
}
}