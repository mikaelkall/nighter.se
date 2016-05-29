all:
	./rumprun kvm -M 256 -I 'nic,vioif,-net user,hostfwd=tcp::8080-:8080' -W nic,inet,dhcp -i -b nighter.se.iso,/nighter.se ./node-default.bin /nighter.se/server.js
