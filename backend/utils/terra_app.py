from terra.base_client import Terra
import datetime
import requests

terra = Terra(
    api_key='JWlqJTpxMiIreDGyP5W5KE25rR-SGULH',
    dev_id='harvard-testing-cm5nhKi7If',
    secret="YOUR TERRA SECRET"
)
user_id = "c6e4b3e6-7f89-4708-a795-d473f327fd74"
user = terra.from_user_id(user_id)
start_date="2022-10-07"
end_date="2022-10-08"


def getUserInfo():
    res = terra.get_user_info(user)
    print(res.json)


def getUserActivity():
    url = f'https://api.tryterra.co/v2/activity?user_id={user_id}&start_date={start_date}&end_date={end_date}&to_webhook=true&with_samples=true'

    headers = {
        "accept": "application/json",
        "dev-id": "harvard-testing-cm5nhKi7If",
        "x-api-key": "JWlqJTpxMiIreDGyP5W5KE25rR-SGULH"
    }
    response = requests.get(url, headers=headers)
    print(response.json()["data"][0]["metadata"])

def getUserSleep():
    url = f'https://api.tryterra.co/v2/sleep?user_id={user_id}&start_date={start_date}&end_date={end_date}&to_webhook=false&with_samples=true'

    headers = {
        "accept": "application/json",
        "dev-id": "harvard-testing-cm5nhKi7If",
        "x-api-key": "JWlqJTpxMiIreDGyP5W5KE25rR-SGULH"
    }

    response = requests.get(url, headers=headers)
    # print(response.json())
    sleep_in_seconds = response.json()["data"][0]["sleep_durations_data"]["asleep"]["duration_asleep_state_seconds"]
    return sleep_in_seconds/3600;

def getUserBody():
    url = f'https://api.tryterra.co/v2/body?user_id={user_id}&start_date={start_date}&end_date={end_date}&to_webhook=true&with_samples=true'

    headers = {
        "accept": "application/json",
        "dev-id": "harvard-testing-cm5nhKi7If",
        "x-api-key": "JWlqJTpxMiIreDGyP5W5KE25rR-SGULH"
    }

    response = requests.get(url, headers=headers)

    print(response.text)

getUserActivity()