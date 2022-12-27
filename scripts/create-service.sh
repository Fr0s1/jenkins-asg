#!/bin/bash

cat << EOF > /etc/systemd/system/node.service
[Unit]
Description="Sample Express Application"

[Service]
User=root
WorkingDirectory=/app
ExecStart=node out.js
Restart=always

[Install]
WantedBy=multi-user.target
EOF