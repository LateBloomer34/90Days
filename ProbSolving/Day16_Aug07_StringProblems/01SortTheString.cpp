#include<iostream>
using namespace std;

int main (){
    string s = "helloworld";
    int n = s.size();
    for(int i = 0 ; i < n ; i++){
        for (int j = 0 ; j < n; j++){
            if (s[j]<s[i]){
                swap(s[j], s[i]);
            }
        }
    }
    cout<<s;
}
