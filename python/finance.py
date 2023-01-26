
import time
from functools import wraps

def timing(method):
    """Decorator for timing functions
    Usage:
    @timing
    def function(a):
        pass
    """

    @wraps(method)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = method(*args, **kwargs)
        end = time.time()
        print('function:%r took: %2.22f secs' % (method.__name__,  end - start))
        return result
    return wrapper


@timing
def selectStock(savings: int, current_value: list, future_value: list) -> int:
    """Method to find the stocks to buy to maximise the profit.
    The loop is going to sum every each element with each of the rest others.
    If two elements minus saving is not negative or not sum of the same number, save it."""
    result = dict()
    for index, el in enumerate(current_value):
        for index_2, el_2 in enumerate(current_value):
            sum = el + el_2
            if savings - sum >= 0 and index != index_2:
                result[sum] = [index, index_2]
    return check_profit(result, future_value)

def check_profit(current: dict, future_value: list) -> int:
    """current: {242: [2, 1], 230: [4, 1], 206: [4, 2]}
    Add the elements from future_value in the same postion as the current
    and substract them to find out the most profitable stock."""
    result = []
    for el, index in current.items():
        future_profit = future_value[index[0]] + future_value[index[1]]
        result.append(future_profit - el)
    return max(result)

@timing
def select_stock_comprehension(savings: int, current_value: list, future_value: list) -> int:
    """Same method than selectStock() but we are using list comprehension.
    Slightly slower than selectStock() on average 0.000001 seconds."""
    result = {
        el + el_2:[index, index_2]
        for index, el in enumerate(current_value)
        for index_2, el_2 in enumerate(current_value)
        if savings - (el + el_2) >= 0 and index != index_2
    }
    return check_profit_comprehension(result, future_value)


def check_profit_comprehension(current: dict, future_value: list) -> int:
    """Same method as check_profit() but we are using list comprehension.
    Slightly slower than selectStock() on average 0.000001 seconds."""
    return max([
        (future_value[index[0]] + future_value[index[1]]) - el
        for el, index in current.items()
    ])
