# import csv
# with open('mycsv.csv', 'w',newline='') as f:
#     fieldnames=['column1', 'column2', 'column3']
#     thewriter=csv.DictWriter(f, fieldnames=fieldnames)

#     thewriter.writeheader()
#     for i in range(1,100):
#         thewriter.writerow({'column1':'one', 'column3':'three', 'column2':'two'})



import csv

with open('mytxt.txt') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
            line_count += 1
    print(f'Processed {line_count} lines.')