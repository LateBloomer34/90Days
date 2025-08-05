#include<iostream>
using namespace std;

string removeParen(string s){
    int n = s.size();
    stack<char>stck;
    string result;

    for (int i = 0 ; i < n ; i++){
        // approach - is stack is empty put element into stack but dont add into answer;
                        // if stack not empty , add all into answer
        if (stck.empty()){
            stck.push(s[i]);
        }
        else{
            if (s[i]=='('){
                stck.push(s[i]); 
                result.push_back(s[i]);
            }
            else{
                stck.pop();
                if(!stck.empty()){
                result.push_back(s[i]);
                }
            }
        }
    }

    return result;
}


    int main (){
    string s =  "(()())(())";
    cout<<removeParen(s);
}
