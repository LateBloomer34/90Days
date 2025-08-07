#include<iostream>
using namespace std;

void sort (string s){
    int n = s.size();
    vector<int>freq(26,0);


for (int i = 0 ;i < n ; i++){
    int pos = s[i] - 'a';
    freq[pos]++;
}

for (int i = 0 ; i < freq.size() ; i++){
    if (freq[i]>0){
        for (int j = 0; j < freq[i] ; j++){
            cout<<char(i+'a');
        }
    }
}

}

int main (){
    string s = "himanshu";
    sort(s);
}