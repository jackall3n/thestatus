#!/usr/bin/env bash

service=thestatus.service
service_dir=/etc/systemd/system

echo "copying ${service} to ${service_dir}"
sudo cp ${service} ${service_dir}
echo "copied ${service}"

echo "enabling ${service}"
sudo systemctl enable ${service}
echo "enabled ${service}"

echo "starting ${service}"
sudo systemctl start ${service}
echo "started ${service}?"