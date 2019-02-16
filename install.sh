#!/usr/bin/env bash

service=thestatus.service

sudo cp ${service} /etc/systemd/system

sudo systemctl enable ${service}

sudo systemctl start ${service}