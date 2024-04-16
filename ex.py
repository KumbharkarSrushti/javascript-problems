a=["a","s","a","s","p","p","t","t"]
# a=[1,2,3,4,5,1,2,3,4,5,1,2,2,3,4,3,4,5,5,1,1,2]
i=0 
d=[]
s=[]
y=[]
while i<len(a):
    j=0
    c=0
    while j<len(a):
        if a[i]==a[j]:
            s.append(a[i])
            c+=1
        j+=1
    k=0
    while k<1:
        if a[i] not in d:
            d.append(a[i])
            print(a[i],"times",c)
            y.append([a[i],"=",c])
        k+=1
    i+=1
print(y)