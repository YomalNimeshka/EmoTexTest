import mysql.connector
from mysql.connector import Error

from random import randint
num = randint(1,4)

###   Getting a random response from the emotion_joy database table   ###
def emotion_joy():
    try: 
        connection  = mysql.connector.connect(host='localhost',
                                                database = 'emotex_db',
                                                user = 'root')

        cursor = connection.cursor()
        sql_select_query = """select emo_response from emotion_joy where emo_id  = %s"""

        # Set variable in query
        cursor.execute(sql_select_query, (num,))

        # Get the emo_response value
        record = cursor.fetchone()
    
    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        # Closing connection
        if connection.is_connected():
            cursor.close()
            connection.close()

    return record[0]

###   Getting a random response from the emotion_anger database table   ###
def emotion_angry():
    try: 
        connection  = mysql.connector.connect(host='localhost',
                                                database = 'emotex_db',
                                                user = 'root')

        cursor = connection.cursor()
        sql_select_query = """select emo_response from emotion_anger where emo_id  = %s"""

        # set variable in query
        cursor.execute(sql_select_query, (num,))

        # Get the emo_response value
        record = cursor.fetchone()
    
    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        # Closing connection
        if connection.is_connected():
            cursor.close()
            connection.close()

    return record[0]

###   Getting a random response from the emotion_fear database table   ###
def emotion_fear():
    try: 
        connection  = mysql.connector.connect(host='localhost',
                                                database = 'emotex_db',
                                                user = 'root')

        cursor = connection.cursor()
        sql_select_query = """select emo_response from emotion_fear where emo_id  = %s"""

        # set variable in query
        cursor.execute(sql_select_query, (num,))

        # Get the emo_response value
        record = cursor.fetchone()
    
    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        # Closing connection
        if connection.is_connected():
            cursor.close()
            connection.close()

    return record[0]

###   Getting a random response from the emotion_surprise database table   ###
def emotion_surprise():
    try: 
        connection  = mysql.connector.connect(host='localhost',
                                                database = 'emotex_db',
                                                user = 'root')

        cursor = connection.cursor()
        sql_select_query = """select emo_response from emotion_surprise where emo_id  = %s"""

        # set variable in query
        cursor.execute(sql_select_query, (num,))

        # Get the emo_response value
        record = cursor.fetchone()
    
    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        # Closing connection
        if connection.is_connected():
            cursor.close()
            connection.close()

    return record[0]
