#!/usr/bin/python3

from fabric.api import env, run, cd, task

debug = False

"""
Fabric deploy script

This is a Fabric (python 3) deployment script to be used by CircleCI to
deploy this project automatically to either production or staging.
"""

env.path1 = '../home/admin123/asi_test/'
env.path2 = '../home/admin123/asi_test/frontend'

env.user = 'root'


@task
def deploy():
    with cd(env.path1):
        run('git pull')
        run('source venv/bin/activate')
        run('pip install -r requirements.txt')
        run('python3 manage.py migrate --noinput')
        run('python3 manage.py collectstatic --noinput')
        run("sudo systemctl restart gunicorn")
        run("deactivate")
    with cd(env.path2):
        run('yarn install')