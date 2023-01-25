
def selectStock(saving, current_value, future_value):
    result = {}
    for index, el in enumerate(current_value):
        for index_2, el_2 in enumerate(current_value):
            sum = el + el_2
            if saving - sum >= 0 and index != index_2:
                result[sum] = [index, index_2]
    res = []
    for index, el in result.items():
        future_profit = future_value[el[0]] + future_value[el[1]]
        res.append(future_profit - index)
    return max(res)
