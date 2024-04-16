# N=int(input())
# P=list(map(int,input().split()))
# Q=int(input())

# for i in range(Q):
#     A,B=map(int,input().split())
#     m=min(P[A-1:B])
#     print(m)

# # 3
# # 2 1 3
# # 3
# # 2 3
# # 1 2
# # 1 3

# S=input()
# l=len(S)
# for i in range(l):
#     if S.count(S[i])==1:
#         print(i+1)

# S=input()
# if S[0] == S[1]:
#     t=S[0]
# else:
#     t=S[2]
# i=0
# while i<len(S):
#     if t!=S[i]:
#         print(i+1)
#     i=i+1




N,K=map(int,input().split())
A=list(map(int,input().split()))
for i in A:
  if i%K==0:
    quotients=i//K
    print(quotients)