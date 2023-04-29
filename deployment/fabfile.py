import os
from fabric.api import *


PROJECT_DIR = '/home/ubuntu/blgrv/belgravia-next'
env.hosts = ['ubuntu@44.208.45.254']



def update():
    with prefix('cd {}'.format(PROJECT_DIR)):
        sudo('chmod 700 build.tar.gz')
        run('tar xvzf build.tar.gz')
        run('pm2 stop nextjs')
        run('npm install --force')
        run('pm2 start yarn --name nextjs -- start')

# pm2 start yarn --name nextjs -- start