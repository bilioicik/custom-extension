;(function (Scratch) {
    
    const {Cast} = Scratch;

    const speed = Symbol("speed");
    const dt = Symbol("dt");
    const turn = Symbol("turn")

    const MotionPropicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIyODcuMDg1OTQiIGN5PSIyMzcuNiIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjI0MCIgY3k9IjEyMi40MDAwMSIgcj0iMTUxLjk3MTg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsNy41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNLTYwLDM2Ny41di0zNzVoNjAwdjM3NXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE3MC42MDQ0NiwxOTcuNk0yMTAuNjA0NDYsMTk3LjZoMTUyLjk2Mjk2YzIyLjA5MTM5LDAgNDAsMTcuOTA4NjEgNDAsNDBjMCwyMi4wOTEzOSAtMTcuOTA4NjEsNDAgLTQwLDQwaC0xNTIuOTYyOTZjLTIyLjA5MTM5LDAgLTQwLC0xNy45MDg2MSAtNDAsLTQwYzAsLTIyLjA5MTM5IDE3LjkwODYxLC00MCA0MCwtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMSkiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNODguMDI4MTEsNzcuODI4NTdjMCwtNC4xMDI2OSAzLjMyNTg4LC03LjQyODU3IDcuNDI4NTcsLTcuNDI4NTdoMTQuODU3MTRjMy43MTQyOSwwIDUuNTcxNDMsMS44NTcxNCA3LjQyODU3LDMuNzE0MjhsNy40Mjg1Nyw3LjQyODU3YzEuODU3MTUsMS44NTcxNSAzLjcxNDI5LDMuNzE0MjkgNy40Mjg1NywzLjcxNDI5aDIyLjI4NTcyYzMuNzE0MjgsMCA1LjU3MTQzLC0xLjg1NzE0IDcuNDI4NTcsLTMuNzE0MjlsNy40Mjg1NywtNy40Mjg1N2MxLjg1NzE1LC0xLjg1NzE1IDMuNzE0MjksLTMuNzE0MjggNy40Mjg1NywtMy43MTQyOGgyMDcuMzcyMzVjNC4xMDI2OSwwIDcuNDI4NTcsMy4zMjU4OCA3LjQyODU3LDcuNDI4NTd2NzQuMjg1NzJjMCw0LjEwMjY5IC0zLjMyNTg4LDcuNDI4NTcgLTcuNDI4NTcsNy40Mjg1N2gtMjA3LjM3MjM0Yy0zLjcxNDI4LDAgLTUuNTcxNDMsMS44NTcxNSAtNy40Mjg1NywzLjcxNDI5bC03LjQyODU3LDcuNDI4NTdjLTEuODU3MTUsMS44NTcxNSAtMy43MTQyOSwzLjcxNDI5IC03LjQyODU3LDMuNzE0MjloLTIyLjI4NTcyYy0zLjcxNDI4LDAgLTUuNTcxNDIsLTEuODU3MTQgLTcuNDI4NTcsLTMuNzE0MjlsLTcuNDI4NTcsLTcuNDI4NTdjLTEuODU3MTUsLTEuODU3MTUgLTMuNzE0MjksLTMuNzE0MjkgLTcuNDI4NTcsLTMuNzE0MjloLTE0Ljg1NzE0Yy00LjEwMjY5LDAgLTcuNDI4NTcsLTMuMzI1ODggLTcuNDI4NTcsLTcuNDI4NTd6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMikiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNODguMDI4MTEsNzcuODI4NTdjMCwtNC4xMDI2OSAzLjMyNTg4LC03LjQyODU3IDcuNDI4NTcsLTcuNDI4NTdoMTQuODU3MTRjMy43MTQyOSwwIDUuNTcxNDMsMS44NTcxNCA3LjQyODU3LDMuNzE0MjhsNy40Mjg1Nyw3LjQyODU3YzEuODU3MTUsMS44NTcxNSAzLjcxNDI5LDMuNzE0MjkgNy40Mjg1NywzLjcxNDI5aDIyLjI4NTcyYzMuNzE0MjgsMCA1LjU3MTQzLC0xLjg1NzE0IDcuNDI4NTcsLTMuNzE0MjlsNy40Mjg1NywtNy40Mjg1N2MxLjg1NzE1LC0xLjg1NzE1IDMuNzE0MjksLTMuNzE0MjggNy40Mjg1NywtMy43MTQyOGgyMDcuMzcyMzVjNC4xMDI2OSwwIDcuNDI4NTcsMy4zMjU4OCA3LjQyODU3LDcuNDI4NTd2NzQuMjg1NzJjMCw0LjEwMjY5IC0zLjMyNTg4LDcuNDI4NTcgLTcuNDI4NTcsNy40Mjg1N2gtMjA3LjM3MjM0Yy0zLjcxNDI4LDAgLTUuNTcxNDMsMS44NTcxNSAtNy40Mjg1NywzLjcxNDI5bC03LjQyODU3LDcuNDI4NTdjLTEuODU3MTUsMS44NTcxNSAtMy43MTQyOSwzLjcxNDI5IC03LjQyODU3LDMuNzE0MjloLTIyLjI4NTcyYy0zLjcxNDI4LDAgLTUuNTcxNDIsLTEuODU3MTQgLTcuNDI4NTcsLTMuNzE0MjlsLTcuNDI4NTcsLTcuNDI4NTdjLTEuODU3MTUsLTEuODU3MTUgLTMuNzE0MjksLTMuNzE0MjkgLTcuNDI4NTcsLTMuNzE0MjloLTE0Ljg1NzE0Yy00LjEwMjY5LDAgLTcuNDI4NTcsLTMuMzI1ODggLTcuNDI4NTcsLTcuNDI4NTd6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9IiMzYzc4Y2MiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xNzAuNjEzNzIsMTk3LjZNMjEwLjYxMzcyLDE5Ny42aDE1Mi45NTM3YzIyLjA5MTM5LDAgNDAsMTcuOTA4NjEgNDAsNDBjMCwyMi4wOTEzOSAtMTcuOTA4NjEsNDAgLTQwLDQwaC0xNTIuOTUzN2MtMjIuMDkxMzksMCAtNDAsLTE3LjkwODYxIC00MCwtNDBjMCwtMjIuMDkxMzkgMTcuOTA4NjEsLTQwIDQwLC00MHoiIGZpbGw9IiM0Yzk3ZmYiIHN0cm9rZT0iIzNjNzhjYyIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTY5LjI4Njc3LDIyOC42MDAwMmgxOS41NzQ1NXYtMTMuNDk5OTlsMjUuNDI1NDQsMjIuNDk5OTlsLTI1LjQyNTQ0LDIyLjQ5OTk5di0xMy40OTk5OWgtMTkuNTc0NTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMzMzczY2MiIHN0cm9rZS13aWR0aD0iMiIvPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzNjNzhjYyIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMzYwLjM5NzksMjM3LjU4Mjg5YzAuMDAwMDQsMC4wMDU3IDAuMDAwMDUsMC4wMTE0MSAwLjAwMDA1LDAuMDE3MTJjMCwwLjI1Mzc4IC0wLjAzNDgxLDAuNDk5NDMgLTAuMDk5OTMsMC43MzI0MmMtMC4wODY0MiwwLjMwOTI0IC0wLjIyNjIxLDAuNTk2MTkgLTAuNDA4ODIsMC44NTAzMmMtMC40OTI4MiwwLjY4NTg4IC0xLjI5NzUyLDEuMTMyNTkgLTIuMjA2NTYsMS4xMzI1OWMtMC4wMDIxNiwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0xNi4zMDQzOWMtMS40OTA2NiwwLjAxMDQzIC0yLjY5NTg0LDEuMjIyMDcgLTIuNjk1ODQsMi43MTUxOWgtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5NjU0IDEuMjEwNzEsMi43MTAzMSAyLjcwNjEsMi43MTUyNGgxNi4zMDA2M3YwLjAwMDAxYzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjYgMi43MTUyNiwyLjcxNTI1YzAsMS40OTk1OCAtMS4yMTU2NywyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTAuMDAyMTYsMCAtMC4wMDQzMSwwIC0wLjAwNjQ3LC0wLjAwMDAxaC0yMS43MDkxMmMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI2di0xMC44NTE4MmMtMC4wMDAwMSwtMC4wMDMwNCAtMC4wMDAwMiwtMC4wMDYxIC0wLjAwMDAyLC0wLjAwOTE1di0xMC44NjEwNGMwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMmMwLjAwMjE2LC0wLjAwMDAxIDAuMDA0MzIsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNWMwLDAuMDA0ODMgLTAuMDAwMDIsMC4wMDk2NSAtMC4wMDAwNCwwLjAxNDQ3ek0zNTIuMjcxNDksMjM0Ljg4NDc2YzEuNDkwNjYsLTAuMDEwNDMgMi42OTU4NSwtMS4yMjIwOCAyLjY5NTg1LC0yLjcxNTE5aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI0aC0xMC44ODMwMWMtMS40OTM2NSwwLjAwNjk3IC0yLjcwMjMxLDEuMjE5OTUgLTIuNzAyMzEsMi43MTUyM2gtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5Mzg5IDEuMjA2NDIsMi43MDYgMi42OTgxNCwyLjcxNTIxeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMjEzLjc3Mzk5LDIyNi43Mzg5OGMwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMwLjAwMjE1LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMWMwLjAwMjE1LC0wLjAwMDAxIDAuMDA0MzIsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0wLjAwMDAxLDAgLTAuMDAwMDEsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDYyYy0xLjQ5NTM4LDAuMDA0OTMgLTIuNzA2MTEsMS4yMTg3IC0yLjcwNjExLDIuNzE1MjRoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTMxMSAxLjIwNTE5LDIuNzA0NzYgMi42OTU4NSwyLjcxNTE5aDE2LjMwNDRjMC4wMDIxNSwwIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NiwtMC4wMDAwMWMxLjQ5OTU4LDAgMi43MTUyNSwxLjIxNTY1IDIuNzE1MjUsMi43MTUyNXYxMC44NjEwNGMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzEsLTAuMDAwMDEgLTAuMDA2NDYsLTAuMDAwMDFoLTIxLjcwOTEyYy0wLjAwMjE1LDAuMDAwMDEgLTAuMDA0MzEsMC4wMDAwMSAtMC4wMDY0NywwLjAwMDAxYy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjcgLTIuNzE1MjYsLTIuNzE1MjVjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMC4wMDAwMSwwIDAuMDAwMDEsMCAwLjAwMDAyLDB2MGgxNi4zMDA2M2MxLjQ5NTM4LC0wLjAwNDkzIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDkzMTEgLTEuMjA1MTksLTIuNzA0NzYgLTIuNjk1ODQsLTIuNzE1MTloLTE2LjMwNDM5Yy0wLjAwMjE1LDAgLTAuMDA0MzEsMCAtMC4wMDY0NiwwYy0wLjkwOTAzLDAgLTEuNzEzNzQsLTAuNDQ2NzEgLTIuMjA2NTYsLTEuMTMyNTljLTAuMzIwMiwtMC40NDU1OSAtMC41MDg3NSwtMC45OTIxNSAtMC41MDg3NSwtMS41ODI3NGMwLC0wLjAwNTcxIDAuMDAwMDEsLTAuMDExNDEgMC4wMDAwNiwtMC4wMTcxMXoiLz48cGF0aCBkPSJNMjcwLjc5NDQsMjI0LjAyMzcxYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDRoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY3IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTUgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ2djIxLjcwOTEyYzAuMDAwMDEsMC4wMDIxNSAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjJjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4yOTQxOGMwLjAwMDAxLDAuMDAyMTUgMCwwLjAwNDMxIDAsMC4wMDY0N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNSwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjcgLTIuNzE1MjYsLTIuNzE1MjZjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJoLTAuMDAwMDF2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2MmgtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNSAwLC0wLjAwNDMxIDAsLTAuMDA2NDd2LTE5LjAwMDI5djBjMCwwIDAsLTAuMDAwMDEgMCwtMC4wMDAwNXYtNS40MzA1MXoiLz48cGF0aCBkPSJNMjQ5LjA3MjM1LDI1MS4xNzYyOGMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI1YzAsLTAuMDAyMTUgMCwtMC4wMDQzMSAwLC0wLjAwNjQ2di0yMS43MDkxMmMtMC4wMDAwMSwtMC4wMDIxNSAwLC0wLjAwNDMxIDAsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJ2MHYyMS43MjIwM3YwYzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI1IC0yLjcxNTI2LDIuNzE1MjV6Ii8+PHBhdGggZD0iTTI0Ni4zNTcwNSwyMTAuNDQ3NDFjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjVjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI1eiIvPjxwYXRoIGQ9Ik0yODkuODAxMTgsMjQ4LjQ2MTAyYzAsLTAuMDAyMTUgLTAuMDAwMDEsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTMuNTY5ODJ2MHYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDgsMC4wMDAwMWgxMy41Njk4MXYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNSAwLDAuMDA0MzIgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzdjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMGgtMTMuNTY5ODJ2MGgtMi42OTY5M2MtMC4wMDMwNCwwLjAwMDAyIC0wLjAwNjA5LDAuMDAwMDMgLTAuMDA5MTUsMC4wMDAwNWgtMC4wMDkxMXYwLjAwMDA1Yy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNSwyLjcwNjF2MTYuMzAwNjNoLTAuMDAwMDFjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2YzAsLTAuMDAyMTYgMCwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ3di0yMS42OTU2OWMtMC4wMDAwNSwtMC4wMDY2MyAtMC4wMDAwNywtMC4wMTMyOCAtMC4wMDAwNywtMC4wMTk5NHpNMjk3LjkzNzgyLDIyOS40NTQyM2MtMS40OTUzOCwwLjAwNDkzIC0yLjcwNjEsMS4yMTg3MSAtMi43MDYxLDIuNzE1MjVoLTAuMDAwMDR2MTAuODcwMTVjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxIDIuNzE1MjQsMi43MDYxdjAuMDAwMDNoMTAuODcwMTVjMS40OTUzOCwtMC4wMDQ5MyAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjRoMC4wMDAwNHYtMTAuODcwMTVjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0zMjUuMDk5NiwyNTEuMTc2M2MtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2YzAsLTAuMDAyMTUgMC4wMDAwMSwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ2di0xOS4wMDAzOGgtMC4wMDAwN3YtNS40MzA1MWgwLjAwMDA3di0xOS4wMDAzM2MtMC4wMDAwMSwtMC4wMDIxNSAtMC4wMDAwMSwtMC4wMDQzMiAtMC4wMDAwMSwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmgwLjAwMDAxdjIxLjcyMjAzaC0wLjAwMDAxYzAsMC4wMDAwMSAwLDAuMDAwMDMgMCwwLjAwMDA1YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAyaDAuMDAwMDF2MjEuNzIyMDNoLTAuMDAwMDFjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNnoiLz48L2c+PGcgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjM2M3OGNjIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0zNDEuNzQ2MjQsMTI5LjQ3Nzk2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZ2LTAuMDAwMDFjMCwtMC4wMDIxNSAwLC0wLjAwNDMgMC4wMDAwMSwtMC4wMDY0NWMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMnYtMTMuNTY5ODJoLTAuMDAwMDF2LTguMTQ1NzdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNiwwIDAuMDA0MzIsMCAwLjAwNjQ4LDAuMDAwMDFoMTMuNTY5ODJ2LTAuMDAwMDFoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY3IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0N3YxMy41Njk4MnYwdjUuNDMwNTJoMC4wMDAwMXYxMy41NzYyN2MwLDAuMDA1MjggLTAuMDAwMDIsMC4wMTA1NyAtMC4wMDAwNSwwLjAxNTg0djIuNjk5NDJoMC4wMDAwM3Y4LjE0NTc3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTAuMDAyMTYsMCAtMC4wMDQzLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxM2MtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdjBoMTYuMzAwNjRjMS40OTUzOCwtMC4wMDQ5MyAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjVoMC4wMDAwMnYtMTAuODYxMDJoLTAuMDAwMDJ2LTAuMDAwMDFoLTAuMDAwMDFjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI1aC0xNi4zMDA2M3Ywek0zNDcuMTY3NjQsMTA3Ljc1NTkzYy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNHYxMC44NzAxNWMwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjExIDIuNzE1MjUsMi43MDYxMXYwLjAwMDAzaDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDR2LTEwLjg3MDE1Yy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDAzeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMTEwLjk0OTI1LDEwNS4wNDA3YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNSAyLjcxNTI1LC0yLjcxNTI1YzAuMDAyMTYsMCAwLjAwNDMxLDAuMDAwMDEgMC4wMDY0NiwwLjAwMDAxaDIxLjcwOTEzYzAuMDAyMTUsLTAuMDAwMDEgMC4wMDQzMSwtMC4wMDAwMSAwLjAwNjQ3LC0wLjAwMDAxYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjYgMi43MTUyNiwyLjcxNTI1YzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTAuMDAwMDEsMCAtMC4wMDAwMSwwIC0wLjAwMDAyLDB2MC4wMDAwMWgtMTYuMzAwNjRjLTEuNDk1MzgsMC4wMDQ5NCAtMi43MDYxLDEuMjE4NzEgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDkzMTIgMS4yMDUxOCwyLjcwNDc2IDIuNjk1ODQsMi43MTUxOWgxNi4zMDQ0MWMwLjAwMjE1LDAgMC4wMDQzMSwtMC4wMDAwMSAwLjAwNjQ2LC0wLjAwMDAxYzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1djEwLjg2MTA0YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTAuMDAyMTUsMCAtMC4wMDQzMSwwIC0wLjAwNjQ2LDBoLTIxLjcwOTEyYy0wLjAwMjE2LDAuMDAwMDEgLTAuMDA0MzEsMCAtMC4wMDY0NywwYy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjVjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMC4wMDAwMSwwIDAuMDAwMDEsMCAwLjAwMDAyLDB2LTAuMDAwMDFoMTYuMzAwNjRjMS40OTUzOCwtMC4wMDQ5NCAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjRoMC4wMDAwNXYtMC4wMDAwMmgtMC4wMDAwNWMwLC0xLjQ5MzEyIC0xLjIwNTE5LC0yLjcwNDc2IC0yLjY5NTg0LC0yLjcxNTE5aC0xNi4zMDQ0Yy0wLjAwMjE2LDAgLTAuMDA0MzEsMC4wMDAwMSAtMC4wMDY0NiwwLjAwMDAxYy0wLjkwOTA0LDAgLTEuNzEzNzQsLTAuNDQ2NzIgLTIuMjA2NTYsLTEuMTMyNmMtMC4zMjAxOSwtMC40NDU1OSAtMC41MDg3NSwtMC45OTIxNCAtMC41MDg3NSwtMS41ODI3M2MwLC0wLjAwNTcxIDAuMDAwMDEsLTAuMDExNDEgMC4wMDAwNSwtMC4wMTcxMXoiLz48cGF0aCBkPSJNMTQ2LjI0NzU3LDEyOS40NzgwMmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLjAwMDAxLC0wLjAwNjQ3di0xMy41Njk4MmgtMC4wMDAwMXYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNiwtMi43MTUyNWMwLjAwMjE1LDAgMC4wMDQzMiwwIDAuMDA2NDcsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzIgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzhjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTEzLjU2OTgydjAuMDAwMDF6TTE1MS42Njg5OCwxMDcuNzU1OTdjLTEuNDk1MzgsMC4wMDQ5NCAtMi43MDYxLDEuMjE4NzEgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA0djEwLjg3MDE1YzAuMDA0OTMsMS40OTUzOCAxLjIxODcxLDIuNzA2MSAyLjcxNTI1LDIuNzA2MXYwLjAwMDA0aDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxMSwtMS4yMTg3IDIuNzA2MTEsLTIuNzE1MjRoMC4wMDAwM3YtMTAuODcwMTZjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI1LC0yLjcwNjF2LTAuMDAwMDR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0xODkuNjkxNjcsMTAyLjMyNTQ0YzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzIgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNWMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwM2gtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcyIC0yLjcxNTI0LDIuNzA2MTF2MTYuMjk0MThjMC4wMDAwMSwwLjAwMjE2IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjExIC0yLjcxNTI0LC0yLjcwNjExaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2NGgtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwM2MwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjVjMCwtMC4wMDIxNiAwLC0wLjAwNDMyIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDNoLTAuMDAwMDFjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNXYtNS40MzA1MXoiLz48cGF0aCBkPSJNMjM1Ljg1MTAyLDExNS44ODQ1N2MwLjAwMDA0LDAuMDA1NyAwLjAwMDA2LDAuMDExNDEgMC4wMDAwNiwwLjAxNzEyYzAsMC4yNTM3OCAtMC4wMzQ4MiwwLjQ5OTQzIC0wLjA5OTkzLDAuNzMyNDJjLTAuMDg2NDIsMC4zMDkyNCAtMC4yMjYyMSwwLjU5NjE5IC0wLjQwODgyLDAuODUwMzJjLTAuNDkyODIsMC42ODU4OCAtMS4yOTc1MiwxLjEzMjU5IC0yLjIwNjU1LDEuMTMyNTljLTAuMDAyMTUsMCAtMC4wMDQzMSwtMC4wMDAwMSAtMC4wMDY0NywtMC4wMDAwMWgtMTYuMzA0NDFjLTEuNDkwNjYsMC4wMTA0MyAtMi42OTU4NCwxLjIyMjA3IC0yLjY5NTg0LDIuNzE1MTloLTAuMDAwMDV2MC4wMDAwM2gwLjAwMDA1YzAsMS40OTY1NCAxLjIxMDcyLDIuNzEwMzEgMi43MDYxMSwyLjcxNTI0aDE2LjMwMDYzdjAuMDAwMDFjMC4wMDAwMSwwIDAuMDAwMDIsMCAwLjAwMDAzLDBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAuMDAwMDEgLTAuMDA2NDcsMGgtMjEuNzA5MTNjLTAuMDAyMTUsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY1IC0yLjcxNTI2LC0yLjcxNTI1di0xMC44NTE4NGMtMC4wMDAwMSwtMC4wMDMwNSAtMC4wMDAwMSwtMC4wMDYwOSAtMC4wMDAwMSwtMC4wMDkxNHYtMTAuODYxMDVjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNSwwIDAuMDA0MzEsMC4wMDAwMSAwLjAwNjQ2LDAuMDAwMDFoMjEuNzA5MTNjMC4wMDIxNSwtMC4wMDAwMSAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDcsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjVjMCwwLjAwNDgyIC0wLjAwMDAxLDAuMDA5NjUgLTAuMDAwMDQsMC4wMTQ0N3pNMjI3LjcyNDYyLDExMy4xODY0M2MxLjQ5MDY2LC0wLjAxMDQzIDIuNjk1ODQsLTEuMjIyMDggMi42OTU4NCwtMi43MTUxOWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDk2NTQgLTEuMjEwNzIsLTIuNzEwMzEgLTIuNzA2MTEsLTIuNzE1MjRoLTEwLjg4M2MtMS40OTM2NCwwLjAwNjk3IC0yLjcwMjMxLDEuMjE5OTUgLTIuNzAyMzEsMi43MTUyM2gtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5Mzg5IDEuMjA2NDIsMi43MDYgMi42OTgxNCwyLjcxNTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yNDYuNzEyMTksODMuMzE4NTFjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZ2MGMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMnYwdjE2LjMwMDYzYzAuMDA0OTMsMS40OTUzOCAxLjIxODcxLDIuNzA2MTEgMi43MTUyNSwyLjcwNjExdjAuMDAwMDVoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NyAyLjcwNjEsMi43MTUyNGgwLjAwMDA1djAuMDAwMDNoLTAuMDAwMDVjMCwwLjAwMDAyIDAsMC4wMDAwNCAwLDAuMDAwMDZoMC4wMDAwNXYwLjAwMDAzaC0wLjAwMDA1YzAsMS40OTY1NCAtMS4yMTA3MSwyLjcxMDMgLTIuNzA2MSwyLjcxNTI0aC0wLjAwOTEydjAuMDAwMDVjLTEuNDkzNDgsMCAtMi43MDUzNSwxLjIwNTc5IC0yLjcxNTIsMi42OTY5N3YxMC44ODg0YzAuMDA0OTMsMS40OTUzOCAxLjIxODcxLDIuNzA2MSAyLjcxNTI1LDIuNzA2MXYwLjAwMDA1aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcxIDIuNzA2MSwyLjcxNTI0aDAuMDAwMDV2MC4wMDAwMmgtMC4wMDAwNWMwLDEuNDk2NTQgLTEuMjEwNzEsMi43MTAzMSAtMi43MDYxLDIuNzE1MjRjLTAuMDAwMDEsMCAtNS40Mzk2NiwwIC01LjQzOTY3LDBjLTAuNDQ5NDYsMCAtMC44NzM0MiwtMC4xMDkyMSAtMS4yNDY3OCwtMC4zMDI1M2MtMC44NzIzNywtMC40NTE2OCAtMS40Njg1NiwtMS4zNjI1OSAtMS40Njg1NiwtMi40MTI3NmMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwM3Ywdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjUsLTIuNzA2MXYtMC4wMDAwNWgtMC4wMDkxMmMtMS40OTUzOCwtMC4wMDQ5NCAtMi43MDYxLC0xLjIxODcgLTIuNzA2MSwtMi43MTUyNGgtMC4wMDAwNXYtMC4wMDAwMmgwLjAwMDA1YzAsLTEuMDEwMTcgMC41NTE2MywtMS44OTE1IDEuMzcwMSwtMi4zNTkxOGMwLjM5NDA5LC0wLjIyNTIxIDAuODUwMDUsLTAuMzU0NSAxLjMzNjA4LC0wLjM1NjFoMC4wMDkxMnYtMC4wMDAwNWMxLjQ5NjU0LDAgMi43MTAzMSwtMS4yMTA3MiAyLjcxNTI0LC0yLjcwNjF2LTE2LjMwMDYzYzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMjc2LjU4MDAzLDEwMi4zMjUzOGMwLjAwNTI4LDAgMC4wMTA1NywwLjAwMDAyIDAuMDE1ODQsMC4wMDAwNWgyLjY5OTQydi0wLjAwMDAzaDguMTQ1NzhjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NiAyLjcxNTI1LDIuNzE1MjVjMCwwLjAwMjE2IC0wLjAwMDAxLDAuMDA0MzEgLTAuMDAwMDEsMC4wMDY0N3YyMS43MDkxM2MwLjAwMDAxLDAuMDAyMTYgMC4wMDAwMSwwLjAwNDMxIDAuMDAwMDEsMC4wMDY0N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNSwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjcgLTIuNzE1MjYsLTIuNzE1MjZjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJoLTAuMDAwMDF2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDAyaC0xMC44NjEwMnYwLjAwMDAxaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcyIC0yLjcxNTI1LDIuNzA2MXYxNi4zMDA2NHYwYzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAyYzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NyAtMi43MTUyNSwtMi43MTUyNmMwLC0wLjAwMjE2IDAsLTAuMDA0MzEgMC4wMDAwMSwtMC4wMDY0N3YtMTkuMDAwM2gtMC4wMDAwMWMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA1di01LjQzMDUxaDAuMDAwMDh2LTE5LjAwMDM3Yy0wLjAwMDAxLC0wLjAwMjE2IC0wLjAwMDAxLC0wLjAwNDMyIC0wLjAwMDAxLC0wLjAwNjQ3YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI1LC0yLjcxNTI2YzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAyaDAuMDAwMDF2MTYuMzAwNjRjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNWgwLjAwOTEyYzAuMDAzMDQsMC4wMDAwMSAwLjAwNjExLDAuMDAwMDIgMC4wMDkxNSwwLjAwMDA1eiIvPjxwYXRoIGQ9Ik0yOTguMzAyMTQsMTI5LjQ3Nzk2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjVjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAsLTAuMDA2NDZ2LTIxLjcwOTEyYy0wLjAwMDAxLC0wLjAwMjE2IDAsLTAuMDA0MzIgMCwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMnYwdjIxLjcyMjA0djBjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNXoiLz48cGF0aCBkPSJNMjk1LjU4NjgzLDg4Ljc0OTA4YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNSAyLjcxNTI2LC0yLjcxNTI1YzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI1YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI2LDIuNzE1MjVjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNXoiLz48cGF0aCBkPSJNMzIwLjAyNDE5LDEwMi4zMjUzOGMwLjAwNTI4LDAgMC4wMTA1NywwLjAwMDAyIDAuMDE1ODQsMC4wMDAwNWgyLjY5OTQydi0wLjAwMDAzaDguMTQ1NzhjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NiAyLjcxNTI1LDIuNzE1MjVjMCwwLjAwMjE2IDAsMC4wMDQzMSAwLDAuMDA2NDd2MjEuNzA5MTNjMC4wMDAwMSwwLjAwMjE2IDAsMC4wMDQzMSAwLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwMXYtMC4wMDAwMWgtMTAuODYxMDJ2MC4wMDAwMXYwaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcyIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2NHYwYzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAyYzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NyAtMi43MTUyNSwtMi43MTUyNmMwLC0wLjAwMjE2IDAsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTkuMDAwM3YwYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTF6Ii8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjMwMDoxODcuNS0tPg==";

    const MotionProicon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1NiIgeTE9IjIxNC4wOTQ1OCIgeDI9IjIwNS45MDU1MSIgeTI9IjE0NS45MDU1MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhNWNhZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNhNWNhZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMDAwMDMsLTE0MC4wMDAwNSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyMC4xNjI2NCwyMjAuMDAwMDVjLTExLjEzNTUsMCAtMjAuMTYyNiwtOS4wMjcxIC0yMC4xNjI2LC0yMC4xNjI2di0zOS42NzQ4YzAsLTExLjEzNTUgOS4wMjcxLC0yMC4xNjI2IDIwLjE2MjYsLTIwLjE2MjZoMzkuNjc0OGMxMS4xMzU1LDAgMjAuMTYyNiw5LjAyNzEgMjAuMTYyNiwyMC4xNjI2djM5LjY3NDhjMCwxMS4xMzU1IC05LjAyNzEsMjAuMTYyNiAtMjAuMTYyNiwyMC4xNjI2eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIyMi42NDIzMiwyMTUuMDAwMDVjLTkuNzQzNTYsMCAtMTcuNjQyMjcsLTcuODk4NzEgLTE3LjY0MjI3LC0xNy42NDIyN3YtMzQuNzE1NDVjMCwtOS43NDM1NiA3Ljg5ODcxLC0xNy42NDIyOCAxNy42NDIyNywtMTcuNjQyMjhoMzQuNzE1NDVjOS43NDM1NiwwIDE3LjY0MjI4LDcuODk4NzIgMTcuNjQyMjgsMTcuNjQyMjh2MzQuNzE1NDVjMCw5Ljc0MzU2IC03Ljg5ODcyLDE3LjY0MjI3IC0xNy42NDIyOCwxNy42NDIyN3oiIGZpbGw9IiM0Yzk3ZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIxNy41MDAwMSwxNzFoMTkuNTc0NTV2LTEzLjQ5OTk5bDI1LjQyNTQ0LDIyLjQ5OTk5bC0yNS40MjU0NCwyMi40OTk5OXYtMTMuNDk5OTloLTE5LjU3NDU1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzM3M2NjIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45OTk5NjU6MzkuOTk5OTQ1MDAwMDAwMDI1LS0+";

    const MotionProextensionId = "MotionPro";

    const turnrighticon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAAAXNSR0IArs4c6QAABPdJREFUWEfVmW1QVFUYx+/dFxdYWFBEGNBAS3ISTdgFRtnF7eUDGpFGjBrNNNNk9qHyDXUvTc7ONMji4DBUzjTNNFCDNZPlNJXTqwaCQrILhtg4BEjaQAYhw2LL8nJv8/wPiy4stgKR9/nyu3vuuef+z/+ee+5zzvLcNMNscTxAl47wUhZRIfEriRIvxaBJnrvCwF0mjvL8T8SzBfo6X7dcLzSsZdeLu0GRayRW2wyFt9fnp6mXu+cFGy31ZjjG86VEbYByNdGcMB99fmiJFowMmwde7xsCr3YPgq1df4P2NuePRKUkHoCTKqkH7UqqJmJB7rJgYulX11g7ve4k4hlbMhz32+F7X7BVUlCPTG5HETFUq8oj7sxcgp4/uoo5q1D43WfUb+oYAA+f+I09gZ7BbuKBp2MjiE8YFqK85Iur4InabguxxmaAjqnvJjfBJqG+hHqUsjx0F/Hg1qXosS5QBc40RFFCE3Ut/eC6FaFeTZ5uuoHf1o/bTxKrbYbMOzosG8EmwbGdehIfHfge8eiOB9FTjRpDes6i3zWCe2W++XMvHC40hPt0WDaCTUID3lKthsPrW7EnIZAYHqL26WpjuxPlX9ZjGuWqmtmY0wYowdVxmE65DXr21qdNGKP+PqptR5pR9Vq3K8HLYdkJNgqOd6kHr2yM2UHcYoz0aULZqS6Ul53qbMABz+cTgp26SqJT6wpCuXLYiNOiKBAzEhciV8jPifPXXNSzfdYBnrT3Qtf4PCw7waZ8O744Xx9cg0Gn1bCx6ImWTpYLvHT0ci0xyKl7BPXfXu72ZZneaofTQYMcnkTe5lhMN1kpbEz7G980/IWqhcc7PvRyWDaCzZZGDKqYCDXy14o9SGsnxa73W1B2oW0gnVhVqK++k0tGi72YzuekLdpLfG0sB/HXWU+9zl72ALcWN7fCYdkJNgn1aaQ8cZmuhlj6YrxPE7KLLqK8d1AZQqy0rmRp1xRhEhzf06mdTy5+nHh/FKb1uw6naxTXvH6sjeXNshNsFOypcHhpCNZab233dtiTVZnfaEAPqw8Z8EX8tzBaHBlwhOeQz840JI77AO3JTvB6y/lkUh6m05wnfi5gqTYeEktbueyipmHiDbe4iFhpTeybqWvTuZ6XnWCz9RLSqlG3C1+6j/YmBBAXh2u8DCg/PZ5DYAVy5pABq+e5Dl52gj0OmQR7BR0/mx6VS3w5g23geMKzz5Bbcul3KnONcsjGzhUkseXvHMV4tiY7wWbBvoJMUqkVSPE/3b8K6Vqo1nuV7Flp7Cv/tZPOu4dFE7HGltw+FyaPOyw7wbfGMtuPyEyOwGywf3OsT+MuXGFrun3lrZifh4akH4gizx0nSqP8t8Szh5PwJGYrJu38ePYjZCN47e5zSKtUAfOQbeVtug/ZXFaK7xTipptlU45W5njNL+wD6HkCf/QNHaPf1YWG52bD5UkOy06wx4VUa52OjgOGVVXEFx6LXkPclh6FKmqlf7uWzxQ1YQvH2cOFEb8rfvjmTJye8q6yE+xx4dYQUZdRWVSYZgvxqVQ2pjfoseXFLQj2vUOUbbuILfiuPwcWEGtL1rn+E4dlK3iiGybBvmms7PkxbiTOD1bjz43IUOZ0jxPTM9fTP/IOmyX0r87EWc+1/r05t91JdoInupST8wlyjuvxcdFEUVSAqiGujVh5xMC2N2cp7trh/1vwP9cs2QedJT9+AAAAAElFTkSuQmCC";

    const turnlefticon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAAAXNSR0IArs4c6QAABOxJREFUWEfVWXtQVFUYv2dhYUleogQ0hmKQZTO5speQQR5ajTE2aZPj2OQYZWN/NOjYg9xddGgqFmY0J5txJiMipwfV9JqEnCbLdokIlmoYhXQFUcEHtirChjyW03y/s5eJZWFFRL3fP7+955x77u/87ne/c75vmeRl6eaGRdSk4TwFXVxTQWCzJJ/3HkvX2YU/BxK6+yLuJmQSv0eM47jmjJ0Fct5MWG0x1Il+xn3N56+NqZZwdn7tLCIfFq5rJcxdGqclfKey3YlFuTUywQB3D0EfJm0kDNYGbCCcfXtwGDBah+ExkUHAzq5+YPMpF7Dd2Sfmk6TPMW2AtIOw5g25xZ+6eK4ySHWEM432p4n8w/qocsKC1QlYS4XtHHD39+3w4aAANoPwyaxYDeG6JXHo1waM8i6fgrWc7UX7/j+E0F/Vdg4SDgxKbxE6g3VbCZsK7xOvxsuGn6I6wouN9lJazEsr4tcTrkyNHrG2937owHWOYSZw1oxgnwpOtNHZPYBbtn9zEljdfOkToEV+alyFVUc4w2RvohWV582/l3BubMhExZrU+IFBEZY3lh4BHjrh2gKli+WS/0887MOqIZyeX434GXrbtMuEVdv0WJDm6j764cUrvmg9fAltjW09wIsu4aNKfFa+jYQY32+wy4WgIa3ZfghRwtXvnkNoK5LPEDLVEc4w2ZcT85TE8H2EO55JmpAvvv/jaYz/1Hqui7B/cGgvlGBSLVDiiN9DnC3Gm9OwPMKXV8RPJ3w0RUQdbyvzzPvhT2d2UZ/VIm/CfGokXETMn33wDiNh7lKxc12tfflbJ4a+ve+kFb4WJC9BQyHDmcPbsl+pi6U2rg2swX3PJWFLXZAQOmJod68b18tf/+sC5rXI2GFJYZURNjYcJOY71ydlERruQtCYsL1WcRz3HGi8aBaKGCDEWJZuqs/B8xLCq4TSOD6PsrU7D6Pt+IUriUJh9RG2txHzsrz5swkT465th2v1nMJydzU1eHwO5+exLG1zDR40PSoEB+XKAr3PyP9imQNT1Du68G2wDKPqCNevEiqwPR41EB+vwbrFNBwZiK0oBbmgP8sw2k/RmKptemQ8obqAEbfklx/Dda2j+yGPwioj7E+BqepXfDgiMgSpx3fmBfDpQK/MZcteoXDNkcuPQOGpIuRvXtURzjQ1rKZFLVsY9RmhaRUOZcPGPVWLJ0oa0ebs6Yu/qQqrhvBwpag/9AApVrIuKZMwbV7ECIX/bBVBZ1PpUVSKbBY59aYorBrChg12VJKmRbFv4bvJUThLGD2+y7w+/xfe9eR2ba41NM5abICv37AoccsTzjTX3UmKcM7ETsrZWoLHF0UnE25+DB/9KFNywoKPW371+C4yFcWmTOFbnnD6q3YoEROpLSa8f05YOqFyvtbPFefssSpGHc4+9D+/uxlpd1dvP6JCtSX16JQorDrCWaYGFMf2F+rhuzotipt+ra3zCsaYPzqGsmbH+V5kPr8UP1Dv6+br5sOqIZyT50AZc2hmD7amqq16xNuxKkcnPIp+USOy7cr6f37HD85zCQ5a5L/Hey2TVlh1hBU1Moz2r+l32ryIlYRK9VP5j0PxVcfpf5FeM4m/SWgNlj/AHGPUMbzVnrTCqiWsHMgDdUHLhE9KqDMzJoni25AGylpLFtrEIq/T/3TjOfx4fTeK8H8WdOl31/lNoAAAAABJRU5ErkJggg==";

    const EXTCONFIGCOMMENTID = '_ExtensionConfig_';

    class MotionPro{
        static extCount = 0;
        constructor(runtime) {
            this.runtime = runtime;
            MotionPro.extCount += 1;
            this.id = MotionPro.extCount;
            this.hideExtraBlocks = true
            if (!this.parseExtConfig()) {
                runtime.on('PROJECTLOADED', () => {
                this.parseExtConfig();
                });
            }
            runtime.targets.forEach((target) => this.implementForTarget(target));
                runtime.on("targetWasCreated", (target, originalTarget) =>
                this.implementForTarget(target, originalTarget)
            );
            runtime.on("PROJECT_LOADED", () => {
                runtime.targets.forEach((target) => this.implementForTarget(target));
            });
            
            this._formatMessage = runtime.getFormatMessage({
                "zh-cn": {
                    'MotionPro.Motion':'运动',
                    'MotionPro.showBlock': '显示不常用积木',
                    'MotionPro.hideBlock': '隐藏不常用积木',
                    'MotionPro.showBlock?':'为了避免杂乱，少量积木被隐藏。\n是否要显示它们？',

                    'MotionPro.location':'位置',
                    'MotionPro.clockwise':'顺时针',
                    'MotionPro.anticlockwise':'逆时针',
                    'MotionPro.pointTowardsIt':'并朝向它',
                    'MotionPro.rMenuMove':'向[a]移动[b]步所得[c]',
                    'MotionPro.menuTurn':'旋转[a][b]度',
                    'MotionPro.cmMenuTurnDegreeAround':'绕x:[x]y:[y]旋转[a][d]度并保持[r]距离',
                    'MotionPro.moveAB':'向[a]移动[b]步',
                    'MotionPro.moveABX':'向[a]移动[b]步所得x',
                    'MotionPro.moveABY':'向[a]移动[b]步所得y',
                    'MotionPro.moveA':'向[a]移动',
                    'MotionPro.moveAX':'向[a]移动所得x',
                    'MotionPro.moveAY':'向[a]移动所得y',
                    'MotionPro.moveB':'移动[b]步',
                    'MotionPro.moveBX':'移动[b]步所得x',
                    'MotionPro.moveBY':'移动[b]步所得y',
                    'MotionPro.move':'移动',
                    'MotionPro.moveX':'移动所得x',
                    'MotionPro.moveY':'移动所得y',
                    'MotionPro.turn':'旋转[i]',
                    'MotionPro.turnDegreeAroundAndKeepDistance':'绕x:[x]y:[y]旋转[i][d]度并保持[r]距离',
                    'MotionPro.turnDegreeAround':'绕x:[x]y:[y]旋转[i][d]度',

                    'MotionPro.moveAlongLine':'以速度[a]沿直线移到x:[x]y:[y]',
                    'MotionPro.moveAlongParabola':'以速度[a]沿[b]高抛物线移到x:[x]y:[y]',

                    'MotionPro.distance':'距离',
                    'MotionPro.direction':'方向',
                    'MotionPro.original':'原型',
                    'MotionPro.rMenuDirectionToCoordinate':'到x:[x]y:[y]的[a]',
                    'MotionPro.rDirectionToCoordinate':'到x:[x]y:[y]的方向',
                    'MotionPro.cmDirectionToCoordinate':'面向x:[x]y:[y]',
                    'MotionPro.rDistanceToCoordinate':'到x:[x]y:[y]的距离',
                    'MotionPro.cmCoordinateAdd':'x,y各增加[x][y]',
                    'MotionPro.goToArray':'移到[a]作为[b]',

                    'MotionPro.Setting':'设值',
                    'MotionPro.set':'设为',
                    'MotionPro.plus':'增加',
                    'MotionPro.cmMenuChange':'将[a][b][c]',
                    'MotionPro.cmChangeSpeed':'将移动速度增加[a]',
                    'MotionPro.cmSetSpeed':'将移动速度设为[a]',
                    'MotionPro.cmChangeDirection':'将移动方向增加[a]',
                    'MotionPro.cmSetDirection':'将移动方向设为[a]',
                    'MotionPro.cmSetDirectionToCoordinate':'将移动方向设到x:[x]y:[y]',
                    'MotionPro.cmChangeTurn':'将旋转角度增加[a]',
                    'MotionPro.cmSetTurn':'将旋转角度设为[a]',

                    'MotionPro.Getting':'取值',
                    'MotionPro.movementSpeed':'移动速度',
                    'MotionPro.movementDirection':'移动方向',
                    'MotionPro.rotationAngle':'旋转角度',
                    
                    'MotionPro.Tobecontinued':'未完待续'
                },
                en: {
                    'MotionPro.Motion':'Motion',
                    'MotionPro.showBlock': 'Show Other Blocks',
                    'MotionPro.hideBlock': 'Hide Other Blocks',
                    'MotionPro.showBlock?':'To avoid clutter, a few blocks are hidden.\n Do you want to show them?',

                    'MotionPro.location':'location',
                    'MotionPro.clockwise':'clockwise',
                    'MotionPro.anticlockwise':'anticlockwise',
                    'MotionPro.pointTowardsIt':'point towards it',
                    'MotionPro.rMenuMove':'[c] after moving[b]steps in direction[a]',
                    'MotionPro.menuTurn':'turn[b]degrees[a]',
                    'MotionPro.cmMenuTurnDegreeAround':'turn[d]degrees[a]around x:[x]y:[y]and keep[r]distance',
                    'MotionPro.moveAB':'move[b]steps in direction[a]',
                    'MotionPro.moveABX':'x after moving[b]steps in direction[a]',
                    'MotionPro.moveABY':'y after moving[b]steps in direction[a]',
                    'MotionPro.moveA':'move in direction[a]',
                    'MotionPro.moveAX':'x after moving in direction[a]',
                    'MotionPro.moveAY':'y after moving in direction[a]',
                    'MotionPro.moveB':'move[b]steps',
                    'MotionPro.moveBX':'x after[b]-step-move',
                    'MotionPro.moveBY':'y after[b]-step-move',
                    'MotionPro.move':'move',
                    'MotionPro.moveX':'x after move',
                    'MotionPro.moveY':'y after move',
                    'MotionPro.turn':'turn[i]degrees',
                    'MotionPro.turnDegreeAroundAndKeepDistance':'turn[i][d]degrees around x:[x]y:[y]and keep[r]distance',
                    'MotionPro.turnDegreeAround':'turn[i][d]degrees around x:[x]y:[y]',

                    'MotionPro.moveAlongLine':'move along line to x:[x]y:[y]in speed[a]',
                    'MotionPro.moveAlongParabola':'move along[b]-high parabola to x:[x]y:[y]in speed[a]',

                    'MotionPro.distance':'distance',
                    'MotionPro.direction':'direction',
                    'MotionPro.original':'original',
                    'MotionPro.rMenuDirectionToCoordinate':'[a]to x:[x]y:[y]',
                    'MotionPro.rDirectionToCoordinate':'direction to x:[x]y:[y]',
                    'MotionPro.cmDirectionToCoordinate':'point towards x:[x]y:[y]',
                    'MotionPro.rDistanceToCoordinate':'distance to x:[x]y:[y]',
                    'MotionPro.cmCoordinateAdd':'changed x and y by[x][y]',
                    'MotionPro.goToArray':'go to[a]as[b]',

                    'MotionPro.Setting':'Setting',
                    'MotionPro.set':'set',
                    'MotionPro.plus':'plus',
                    'MotionPro.cmMenuChange':'[b][c]at[a]',
                    'MotionPro.cmChangeSpeed':'change movement speed by[a]',
                    'MotionPro.cmSetSpeed':'set movement speed to[a]',
                    'MotionPro.cmChangeDirection':'change movement direction by[a]',
                    'MotionPro.cmSetDirection':'set movement direction to[a]',
                    'MotionPro.cmSetDirectionToCoordinate':'set movement direction to x:[x]y:[y]',
                    'MotionPro.cmChangeTurn':'change movement rotation angle by[a]',
                    'MotionPro.cmSetTurn':'set rotation movement angle to[a]degrees',

                    'MotionPro.Getting':'Getting',
                    'MotionPro.movementSpeed':'movement speed',
                    'MotionPro.movementDirection':'movement direction',
                    'MotionPro.rotationAngle':'rotation angle',

                    
                    'MotionPro.Tobecontinued':'To be continued'
                }
            })
        }
        formatMessage(id) {
            return this._formatMessage({
                id,
                default: id,
                description: id
            });
        }
        getInfo(){
            return{
                docsURI:'https://learn.ccw.site/article/ded82bb8-3d48-43ea-872e-eb7d2dcbb7cf',
                id:MotionProextensionId,
                name:this.formatMessage('MotionPro.Motion'),
                blockIconURI:'',
                menuIconURI: MotionProicon,
                color1:'#4c97ff',
                color2:'#a5caff',
                blocks:[
                    {
                        blockType: 'button',
                        hideFromPalette: !this.hideExtraBlocks,
                        text: this.formatMessage('MotionPro.showBlock'),
                        onClick: () => {
                        if (confirm(this.formatMessage('MotionPro.showBlock?'))) {
                            this.hideExtraBlocks = false;
                            this.storeExtConfig();
                            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                        }
                        }
                    },
                    {
                        blockType: 'button',
                        text: this.formatMessage('MotionPro.hideBlock'),
                        hideFromPalette: this.hideExtraBlocks,
                        onClick: () => {
                            this.hideExtraBlocks = true;
                            this.storeExtConfig();
                            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                        }
                    },
                    {
                        opcode: 'rTest',
                        blockType: 'reporter',
                        text:'test',
                        filter: ['sprite'],
                        hideFromPalette: 1
                    },
                    {
                        opcode: 'cmTest',
                        blockType: 'command',
                        text:'test',
                        filter: ['sprite'],
                        hideFromPalette: 1
                    },
                    '---',
                    {
                        opcode: 'rMenuMove',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.rMenuMove'),
                        arguments:{
                            a:{
                                menu:'variablemenuWithMovementDirection'
                            },
                            b:{
                                menu:'variablemenuWithMovementSpeed'
                            },
                            c:{
                                menu:'location',
                                defaultValue:0
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmMenuMove',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.moveAB'),
                        arguments:{
                            a:{
                                menu:'variablemenuWithMovementDirection'
                            },
                            b:{
                                menu:'variablemenuWithMovementSpeed'
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMenuTurn',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.menuTurn'),
                        arguments:{
                            a:{
                                menu:'clockwise',
                                defaultValue:1
                            },
                            b:{
                                menu:'variablemenuWithRotationAngle'
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmMenuTurn',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.menuTurn'),
                        arguments:{
                            a:{
                                menu:'clockwise',
                                defaultValue:1
                            },
                            b:{
                                menu:'variablemenuWithRotationAngle'
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmMenuTurnDegreeAround',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmMenuTurnDegreeAround'),
                        arguments:{
                            a:{
                                menu:'clockwise',
                                defaultValue:1
                            },
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            },
                            d:{
                                type:'angle',
                                defaultValue:33
                            },
                            r:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'moveAB',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveAB'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            },
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'moveABX',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveABX'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            },
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'moveABY',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveABY'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            },
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmMoveAB',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.moveAB'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            },
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveA',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveA'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveAX',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveAX'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveAY',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveAY'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmMoveA',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.moveA'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:23
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveB',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveB'),
                        arguments:{
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveBX',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveBX'),
                        arguments:{
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveBY',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveBY'),
                        arguments:{
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmMoveB',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.moveB'),
                        arguments:{
                            b:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMove',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.move'),
                        disableMonitor: true,
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveX',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveX'),
                        disableMonitor: true,
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMoveY',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.moveY'),
                        disableMonitor: true,
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmMove',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.move'),
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rTurnRight',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.turn'),
                        arguments:{
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnrighticon,
                            }
                        },
                        disableMonitor: true,
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rTurnLeft',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.turn'),
                        arguments:{
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnlefticon,
                            }
                        },
                        disableMonitor: true,
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmTurnRight',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.turn'),
                        arguments:{
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnrighticon,
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmTurnLeft',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.turn'),
                        arguments:{
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnlefticon,
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmTurnRightAroundAndKeepDistance',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.turnDegreeAroundAndKeepDistance'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            },
                            d:{
                                type:'angle',
                                defaultValue:33
                            },
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnrighticon,
                            },
                            r:{
                                type:'string',
                                defaultValue:33
                            },
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmTurnLeftAroundAndKeepDistance',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.turnDegreeAroundAndKeepDistance'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            },
                            d:{
                                type:'angle',
                                defaultValue:33
                            },
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnlefticon,
                            },
                            r:{
                                type:'string',
                                defaultValue:33
                            },
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmTurnRightAround',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.turnDegreeAround'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            },
                            d:{
                                type:'angle',
                                defaultValue:33
                            },
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnrighticon,
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmTurnLeftAround',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.turnDegreeAround'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            },
                            d:{
                                type:'angle',
                                defaultValue:33
                            },
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI: turnlefticon,
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    '---',
                    {
                        opcode: 'cmMoveAlongLine',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.moveAlongLine'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:10
                            },
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite']
                    },
                    {
                        opcode: 'cnMoveAlongLine',
                        blockType: 'conditional',
                        text:[this.formatMessage('MotionPro.moveAlongLine')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:10
                            },
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        branchCount: 1,
                        filter: ['sprite']
                    },
                    {
                        opcode: 'cmMoveAlongParabola',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.moveAlongParabola'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:10
                            },
                            b:{
                                type:'string',
                                defaultValue:10
                            },
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite']
                    },
                    {
                        opcode: 'cnMoveAlongParabola',
                        blockType: 'conditional',
                        text:[this.formatMessage('MotionPro.moveAlongParabola')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:10
                            },
                            b:{
                                type:'string',
                                defaultValue:10
                            },
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        branchCount: 1,
                        filter: ['sprite']
                    },
                    '---',
                    {
                        opcode: 'rMenuDirectionToCoordinate',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.rMenuDirectionToCoordinate'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            },
                            a:{
                                menu:'distance',
                                defaultValue:0
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'rDirectionToCoordinate',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.rDirectionToCoordinate'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmDirectionToCoordinate',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmDirectionToCoordinate'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite']
                    },
                    {
                        opcode: 'rDistanceToCoordinate',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.rDistanceToCoordinate'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmCoordinateAdd',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmCoordinateAdd'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite']
                    },
                    {
                        opcode: 'cmGoToArray',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.goToArray'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[[2,0],[0,8],[1,1],[0,2]]'
                            },
                            b:{
                                menu:'JSON',
                                defaultValue:0
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnGoToArray',
                        blockType: 'conditional',
                        text:[this.formatMessage('MotionPro.goToArray')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[[2,0],[0,8],[1,1],[0,2]]'
                            },
                            b:{
                                menu:'JSON'
                            }
                        },
                        branchCount: 1,
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('MotionPro.Setting')
                    },
                    {
                        opcode: 'cmMenuChange',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmMenuChange'),
                        arguments:{
                            a:{
                                menu:'speed',
                                defaultValue:0
                            },
                            b:{
                                menu:'set',
                                defaultValue:0
                            },
                            c:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmChangeSpeed',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmChangeSpeed'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmSetSpeed',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmSetSpeed'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmChangeDirection',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmChangeDirection'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmSetDirection',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmSetDirection'),
                        arguments:{
                            a:{
                                type:'angle',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmSetDirectionToCoordinate',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmSetDirectionToCoordinate'),
                        arguments:{
                            x:{
                                type:'string',
                                defaultValue:23
                            },
                            y:{
                                type:'string',
                                defaultValue:33
                            }
                        },
                        filter: ['sprite']
                    },
                    {
                        opcode: 'cmChangeTurn',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmChangeTurn'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmSetTurn',
                        blockType: 'command',
                        text:this.formatMessage('MotionPro.cmSetTurn'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:24
                            }
                        },
                        filter: ['sprite'],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('MotionPro.Getting')
                    },
                    {
                        opcode: 'rXY',
                        blockType: 'reporter',
                        text:'x,y',
                        filter: ['sprite']
                    },
                    {
                        opcode: 'rSpeed',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.movementSpeed'),
                        filter: ['sprite']
                    },
                    {
                        opcode: 'rDirection',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.movementDirection'),
                        filter: ['sprite']
                    },
                    {
                        opcode: 'rTurn',
                        blockType: 'reporter',
                        text:this.formatMessage('MotionPro.rotationAngle'),
                        filter: ['sprite']
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('MotionPro.Tobecontinued')
                    }
                ],
                menus:{
                    variablemenuWithMovementSpeed:{
                        acceptReporters:true,
                        items:'variablemenuWithMovementSpeed'
                    },
                    variablemenuWithMovementDirection:{
                        acceptReporters:true,
                        items:'variablemenuWithMovementDirection'
                    },
                    variablemenuWithRotationAngle:{
                        acceptReporters:true,
                        items:'variablemenuWithRotationAngle'
                    },
                    location:{
                        acceptReporters:true,
                        items:[
                            {
                                text: 'x', 
                                value: 0
                            },
                            {
                                text: 'y',
                                value: 1
                            },
                            {
                                text: this.formatMessage('MotionPro.location'), 
                                value: 2
                            }
                        ]
                    },
                    clockwise:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('MotionPro.clockwise'), 
                                value: 1
                            },
                            {
                                text: this.formatMessage('MotionPro.anticlockwise'), 
                                value: -1
                            }
                        ]
                    },
                    point:{
                        acceptReporters:true,
                        items:[
                            {
                                text: '', 
                                value: 0
                            },
                            {
                                text: this.formatMessage('MotionPro.pointTowardsIt'), 
                                value: 1
                            }
                        ]
                    },
                    distance:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('MotionPro.direction'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('MotionPro.distance'), 
                                value: 1
                            }
                        ]
                    },
                    JSON:{
                        acceptReporters:true,
                        items:[
                            {
                                text: 'JSON', 
                                value: 0
                            },
                            {
                                text: this.formatMessage('MotionPro.original'), 
                                value: 1
                            }
                        ]
                    },
                    speed:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('MotionPro.movementSpeed'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('MotionPro.movementDirection'), 
                                value: 1
                            },
                            {
                                text: this.formatMessage('MotionPro.rotationAngle'), 
                                value: 2
                            }
                        ]
                    },
                    set:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('MotionPro.set'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('MotionPro.plus'), 
                                value: 1
                            }
                        ]
                    },
                }
            }
        }
        variablemenuWithMovementSpeed() {
            return this.variablemenu(this.formatMessage('MotionPro.movementSpeed'))
        }
        variablemenuWithMovementDirection() {
            return this.variablemenu(this.formatMessage('MotionPro.movementDirection'))
        }
        variablemenuWithRotationAngle() {
            return this.variablemenu(this.formatMessage('MotionPro.rotationAngle'))
        }
        variablemenu(moreThings) {
            const menus = [{text: moreThings,value:'',}];
            let { variables } = this.runtime._stageTarget
            Object.keys(variables).forEach((variable) => {
                if (variables[variable].type !== "list") {
                    menus.push({
                        text: variables[variable].name,
                        value: variables[variable].id,
                    })
                }
            })
            if (this.runtime._editingTarget && this.runtime._editingTarget !== this.runtime._stageTarget) {
                variables = this.runtime._editingTarget.variables
                Object.keys(variables).forEach((variable) => {
                    if (! variables[variable].type) {
                        menus.push({
                            text: `[PRIVATE] ${variables[variable].name}`,
                            value: variables[variable].id,
                        })
                    }
                })
            }
            return menus;
        }
        findExtConfigComment() {
            const stage = this.runtime.getTargetForStage();
            if (!stage || !stage.comments) return undefined;
            return stage.comments[EXTCONFIGCOMMENTID]
        }
        getAllExtConfig() {
            const comment = this.findExtConfigComment();
            if (!comment) return undefined;
            const lines = comment.text.split('\n');
            if (lines.length === 0) {
            console.warn(
                `${MotionProextensionId}: Extension config comment does not contain valid line.`,
            );
            return undefined;
            }
            const jsonText = lines[lines.length - 1];
            try {
            const parsed = JSON.parse(jsonText);
            if (!parsed || typeof parsed !== 'object') {
                throw new Error('Invalid object');
            }
            return parsed;
            } catch (e) {
            console.warn(`${MotionProextensionId}: Config comment has invalid JSON`, e);
            return undefined
            }
        }
        parseExtConfig() {
            let config = this.getAllExtConfig();
            if (!config) return false;
            config = config[MotionProextensionId];
            if (!config) return false;
            if ('hideExtraBlocks' in config) {
            this.hideExtraBlocks = Cast.toBoolean(config.hideExtraBlocks);
            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
            }
            return true
        }
        generateExtConfig() {
            const options = {};
            options.hideExtraBlocks = this.hideExtraBlocks;
            return options
        }
        storeExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) config = {};
        config[MotionProextensionId] = this.generateExtConfig();

        const existingComment = this.findExtConfigComment();
        if (existingComment) {
            const lines = existingComment.text.split('\n');
            if (lines.length === 0) {
            lines.push('');
            }
            lines[lines.length - 1] = JSON.stringify(config);
            existingComment.text = lines.join('\n');
        } else {
            const target = this.runtime.getTargetForStage();
            const text = `${this.formatMessage('config.tip')}\n${JSON.stringify(
            config,
            )}`;
            target.createComment(
            EXTCONFIGCOMMENTID,
            null,
            text,
            1,
            1,
            400,
            200,
            false,
            );
        }
        this.runtime.emitProjectChanged()
        }
        implementForTarget(target, originalTarget){
            if (speed in target)return;
            target[speed] = originalTarget ? originalTarget[speed] : 10;
            target[dt] = originalTarget ? originalTarget[dt] : 90;
            target[turn] = originalTarget ? originalTarget[turn] : 45
        }
        rTest(args,util){
            return NaN == NaN
        }
        cmTest(args,util){
        }

        rMenuMove(args,util){
            const a = (typeof args.a == 'string' ? args.a=='' ? util.target[dt] : util.target.lookupVariableById(args.a)===undefined ? util.target.lookupVariableByNameAndType(args.a, '').value : util.target.lookupVariableById(args.a).value : args.a)*Math.PI/180;
            const b =typeof args.b == 'string' ? args.b=='' ? util.target[speed] : util.target.lookupVariableById(args.b)===undefined ? util.target.lookupVariableByNameAndType(args.b, '').value : util.target.lookupVariableById(args.b).value : args.b;
            switch(args.c){
                case 0 :
                    return util.target.x + b * Math.sin(a)
                case 1 :
                    return util.target.y + b * Math.cos(a)
                default:
                    return [util.target.x + b * Math.sin(a),util.target.y + b * Math.cos(a)]
            }
            
        }
        cmMenuMove(args,util){
            const a = (typeof args.a == 'string' ? args.a=='' ? util.target[dt] : util.target.lookupVariableById(args.a)===undefined ? util.target.lookupVariableByNameAndType(args.a, '').value : util.target.lookupVariableById(args.a).value : args.a)*Math.PI/180;
            const b =typeof args.b == 'string' ? args.b=='' ? util.target[speed] : util.target.lookupVariableById(args.b)===undefined ? util.target.lookupVariableByNameAndType(args.b, '').value : util.target.lookupVariableById(args.b).value : args.b;
            util.target.setXY(util.target.x + b * Math.sin(a),util.target.y + b * Math.cos(a))
        }
        rMenuTurn(args,util){
            return util.target.direction + args.a*(typeof args.b == 'string' ? args.b=='' ? util.target[turn] : util.target.lookupVariableById(args.b)===undefined ? util.target.lookupVariableByNameAndType(args.b, '').value : util.target.lookupVariableById(args.b).value : args.b)
        }
        cmMenuTurn(args,util){
            util.target.setDirection(util.target.direction + args.a*(typeof args.b == 'string' ? args.b=='' ? util.target[turn] : util.target.lookupVariableById(args.b)===undefined ? util.target.lookupVariableByNameAndType(args.b, '').value : util.target.lookupVariableById(args.b).value : args.b))
        }
        cmMenuTurnDegreeAround(args,util){
            var dx = util.target.x-args.x;
            var dy = util.target.y-args.y;
            if(args.r!==''){
                const l = Math.atan(dx / dy) + (dy<0) * Math.PI;
                dx = Math.sin(l)*args.r;
                dy = Math.cos(l)*args.r
            }
            const t = args.a * args.d * Math.PI / 180;
            const s = Math.sin(t);
            const c = Math.cos(t);
            util.target.setXY(dx*c+dy*s+Number(args.x),dy*c-dx*s+Number(args.y))
        }
        moveAB(args,util){
            const a = Math.PI*args.a/180
            return [util.target.x + args.b * Math.sin(a),util.target.y + args.b * Math.cos(a)]
        }
        moveABX(args,util){
            return util.target.x + args.b * Math.sin(Math.PI*args.a/180)
        }
        moveABY(args,util){
            return util.target.y + args.b * Math.cos(Math.PI*args.a/180)
        }
        cmMoveAB(args,util){
            const d = Math.PI*args.a/180;
            util.target.setXY(util.target.x + args.b * Math.sin(d),util.target.y + args.b * Math.cos(d))
        }
        rMoveA(args,util){
            const a = Math.PI*args.a/180
            return [util.target.x + util.target[speed] * Math.sin(a),util.target.y + util.target[speed] * Math.cos(a)]
        }
        rMoveAX(args,util){
            return util.target.x + util.target[speed] * Math.sin(Math.PI*args.a/180)
        }
        rMoveAY(args,util){
            return util.target.y + util.target[speed] * Math.cos(Math.PI*args.a/180)
        }
        cmMoveA(args,util){
            const d = Math.PI*args.a/180;
            util.target.setXY(util.target.x + util.target[speed] * Math.sin(d),util.target.y + util.target[speed] * Math.cos(d))
        }
        rMoveB(args,util){
            const a = Math.PI*util.target[dt]/180
            return [util.target.x + args.b * Math.sin(a),util.target.y + args.b * Math.cos(a)]
        }
        rMoveBX(args,util){
            return util.target.x + args.b * Math.sin(Math.PI*util.target[dt]/180)
        }
        rMoveBY(args,util){
            return util.target.y + args.b * Math.cos(Math.PI*util.target[dt]/180)
        }
        cmMoveB(args,util){
            const d = Math.PI*util.target[dt]/180;
            util.target.setXY(util.target.x + args.b * Math.sin(d),util.target.y + args.b * Math.cos(d))
        }
        rMove(args,util){
            const a = Math.PI*util.target[dt]/180
            return [util.target.x + util.target[speed] * Math.sin(a),util.target.y + util.target[speed] * Math.cos(a)]
        }
        rMoveX(args,util){
            return util.target.x + util.target[speed] * Math.sin(Math.PI*util.target[dt]/180)
        }
        rMoveY(args,util){
            return util.target.y + util.target[speed] * Math.cos(Math.PI*util.target[dt]/180)
        }
        cmMove(args,util){
            const d = Math.PI*util.target[dt]/180;
            util.target.setXY(util.target.x + util.target[speed] * Math.sin(d),util.target.y + util.target[speed] * Math.cos(d))
        }
        rTurnRight(args,util){
            return util.target.direction + util.target[turn]
        }
        rTurnLeft(args,util){
            return util.target.direction - util.target[turn]
        }
        cmTurnRight(args,util){
            util.target.setDirection(util.target.direction + util.target[turn])
        }
        cmTurnLeft(args,util){
            util.target.setDirection(util.target.direction - util.target[turn])
        }
        cmTurnRightAroundAndKeepDistance(args,util){
            const l = Math.atan((util.target.x-args.x) / (util.target.y-args.y)) + (args.y > util.target.y) * Math.PI;
            const dx = Math.sin(l)*args.r;
            const dy = Math.cos(l)*args.r;
            const t = args.d * Math.PI / 180;
            const s = Math.sin(t);
            const c = Math.cos(t);
            util.target.setXY(dx*c+dy*s+Number(args.x),dy*c-dx*s+Number(args.y)) 
        }
        cmTurnLeftAroundAndKeepDistance(args,util){
            const l = Math.atan((util.target.x-args.x) / (util.target.y-args.y)) + (args.y > util.target.y) * Math.PI;
            const dx = Math.sin(l)*args.r;
            const dy = Math.cos(l)*args.r;
            const t = -args.d * Math.PI / 180;
            const s = Math.sin(t);
            const c = Math.cos(t);
            util.target.setXY(dx*c+dy*s+Number(args.x),dy*c-dx*s+Number(args.y))
        }
        cmTurnRightAround(args,util){
            const dx = util.target.x-args.x;
            const dy = util.target.y-args.y;
            const t = args.d * Math.PI / 180;
            const s = Math.sin(t);
            const c = Math.cos(t);
            util.target.setXY(dx*c+dy*s+Number(args.x),dy*c-dx*s+Number(args.y))
        }
        cmTurnLeftAround(args,util){
            const dx = util.target.x-args.x;
            const dy = util.target.y-args.y;
            const t = -args.d * Math.PI / 180;
            const s = Math.sin(t);
            const c = Math.cos(t);
            util.target.setXY(dx*c+dy*s+Number(args.x),dy*c-dx*s+Number(args.y))
        }

        cmMoveAlongLine(args,util){
            const { stackFrame } = util;
            const s = Number(args.a)
            if (stackFrame.d === undefined) {
                const dx = args.x-util.target.x;
                const dy = args.y-util.target.y;
                stackFrame.d = Math.sqrt(dx * dx + dy * dy);
                stackFrame.x = util.target.x;
                stackFrame.y = util.target.y;
                stackFrame.ax = args.x;
                stackFrame.ay = args.y;
                const l = Math.atan(dx / dy) + (dy<0) * Math.PI;
                stackFrame.sin = Math.sin(l);
                stackFrame.cos = Math.cos(l);
                stackFrame.md = s
            } 
            else {
                stackFrame.md += s
            }
            if (s>stackFrame.d-stackFrame.md) {
                util.target.setXY(stackFrame.ax,stackFrame.ay)
                return
            }
            else{
                util.target.setXY(stackFrame.x+stackFrame.sin*stackFrame.md,stackFrame.y+stackFrame.cos*stackFrame.md)
            }
            util.yield()
        }
        cnMoveAlongLine(args,util){
            const { stackFrame } = util;
            const s = Number(args.a)
            if (stackFrame.d === undefined) {
                const dx = args.x-util.target.x;
                const dy = args.y-util.target.y;
                stackFrame.d = Math.sqrt(dx * dx + dy * dy);
                stackFrame.x = util.target.x;
                stackFrame.y = util.target.y;
                stackFrame.ax = args.x;
                stackFrame.ay = args.y;
                const l = Math.atan(dx / dy) + (dy<0) * Math.PI;
                stackFrame.sin = Math.sin(l);
                stackFrame.cos = Math.cos(l);
                stackFrame.md = s
            } 
            else {
                stackFrame.md += s
            }
            if (s>stackFrame.d-stackFrame.md) {
                util.target.setXY(stackFrame.ax,stackFrame.ay)
                return
            }
            else{
                util.target.setXY(stackFrame.x+stackFrame.sin*stackFrame.md,stackFrame.y+stackFrame.cos*stackFrame.md)
            }
            util.startBranch(1,true)
        }
        cmMoveAlongParabola(args,util){
            const { stackFrame } = util;
            const s = Number(args.a)
            if (stackFrame.d === undefined) {
                const dx = args.x-util.target.x;
                const dy = args.y-util.target.y;
                const dd = dx * dx + dy * dy;
                stackFrame.x = util.target.x;
                stackFrame.y = util.target.y;
                stackFrame.ax = args.x;
                stackFrame.ay = args.y;
                stackFrame.d = Math.sqrt(dd);
                const l = Math.atan(dx / dy) + (dy<0) * Math.PI;
                stackFrame.sin = Math.sin(l);
                stackFrame.cos = Math.cos(l);
                stackFrame.a = args.b*4/dd;
                stackFrame.mx = s
            } 
            else {
                stackFrame.mx += s
            }
            stackFrame.my = stackFrame.a*stackFrame.mx*(stackFrame.mx-stackFrame.d)
            if (s>stackFrame.d-stackFrame.mx) {
                util.target.setXY(stackFrame.ax,stackFrame.ay)
                return
            }
            else{
                util.target.setXY(stackFrame.x+stackFrame.sin*stackFrame.mx-stackFrame.cos*stackFrame.my,stackFrame.y+stackFrame.cos*stackFrame.mx+stackFrame.sin*stackFrame.my)
            }
            util.yield()
        }
        cnMoveAlongParabola(args,util){
            const { stackFrame } = util;
            const s = Number(args.a)
            if (stackFrame.d === undefined) {
                const dx = args.x-util.target.x;
                const dy = args.y-util.target.y;
                const dd = dx * dx + dy * dy;
                stackFrame.x = util.target.x;
                stackFrame.y = util.target.y;
                stackFrame.ax = args.x;
                stackFrame.ay = args.y;
                stackFrame.d = Math.sqrt(dd);
                const l = Math.atan(dx / dy) + (dy<0) * Math.PI;
                stackFrame.sin = Math.sin(l);
                stackFrame.cos = Math.cos(l);
                stackFrame.a = args.b*4/dd;
                stackFrame.mx = s
            } 
            else {
                stackFrame.mx += s
            }
            stackFrame.my = stackFrame.a*stackFrame.mx*(stackFrame.mx-stackFrame.d)
            if (s>stackFrame.d-stackFrame.mx) {
                util.target.setXY(stackFrame.ax,stackFrame.ay)
                return
            }
            else{
                util.target.setXY(stackFrame.x+stackFrame.sin*stackFrame.mx-stackFrame.cos*stackFrame.my,stackFrame.y+stackFrame.cos*stackFrame.mx+stackFrame.sin*stackFrame.my)
            }
            util.startBranch(1,true)
        }
        
        rMenuDirectionToCoordinate(args,util){
            const dx = args.x - util.target.x;
            const dy = args.y - util.target.y;
            if(args.a)return Math.sqrt(dx * dx + dy * dy)
            const dr = dx/dy
            if (isNaN(dr))return;
            if (dy>=0)return Math.atan(dr) / Math.PI * 180
            if(dx<0)return Math.atan(dr) / Math.PI * 180 - 180
            return Math.atan(dr) / Math.PI * 180 + 180
        }
        rDirectionToCoordinate(args,util){
            const dx = args.x - util.target.x;
            const dy = args.y - util.target.y;
            const dr = dx/dy
            if (isNaN(dr))return;
            if (dy>=0)return Math.atan(dr) / Math.PI * 180
            if(dx<0)return Math.atan(dr) / Math.PI * 180 - 180
            return Math.atan(dr) / Math.PI * 180 + 180
        }
        cmDirectionToCoordinate(args,util){
            const dy = args.y-util.target.y ;
            util.target.setDirection(Math.atan((args.x-util.target.x) / dy) / Math.PI * 180 + (dy<0 ? 180 : 0))
        }
        rDistanceToCoordinate(args,util){
            const dx = args.x-util.target.x;
            const dy = args.y-util.target.y
            return Math.sqrt(dx * dx + dy * dy)
        }
        cmCoordinateAdd(args,util){
            util.target.setXY(util.target.x + Number(args.x),util.target.y + Number(args.y))
        }
        cmGoToArray(args,util){
            const { stackFrame } = util
            if (stackFrame.i === undefined) {
                stackFrame.i = 0;
                stackFrame.a = args.b ? args.a : JSON.parse(args.a);
                stackFrame.l = stackFrame.a.length-1
            } 
            else {
                stackFrame.i += 1
            }
            util.target.setXY(...stackFrame.a[stackFrame.i])
            if (stackFrame.i==stackFrame.l) {
                return
            }
            util.yield()
        }
        cnGoToArray(args,util){
            const { stackFrame } = util
            if (stackFrame.i === undefined) {
                stackFrame.i = 0;
                stackFrame.a = args.b ? args.a : JSON.parse(args.a);
                stackFrame.l = stackFrame.a.length-1
            } 
            else {
                stackFrame.i += 1
            }
            util.target.setXY(...stackFrame.a[stackFrame.i])
            if (stackFrame.i==stackFrame.l) {
                return
            }
            util.startBranch(1,true)
        }

        cmMenuChange(args,util){
            if(args.b){
                switch(args.a){
                    case 0 :
                        util.target[speed] += Number(args.c)
                        return;
                    case 1 :
                        util.target[dt] += Number(args.c)
                        return;
                    default :
                        util.target[turn] += Number(args.c)
                }
            }
            else{
                switch(args.a){
                    case 0 :
                        util.target[speed] = Number(args.c)
                        return;
                    case 1 :
                        util.target[dt] = Number(args.c)
                        return;
                    default :
                        util.target[turn] = Number(args.c)
                }  
            }
            
        }
        cmChangeSpeed(args,util){
            util.target[speed] += Number(args.a)
        }
        cmSetSpeed(args,util){
            util.target[speed] = Number(args.a)
        }
        cmChangeDirection(args,util){
            util.target[dt] += Number(args.a)
        }
        cmSetDirection(args,util){
            util.target[dt] = Number(args.a)
        }
        cmSetDirectionToCoordinate(args,util){
            const dy = args.y-util.target.y ;
            util.target[dt] = (Math.atan((args.x-util.target.x) / (dy)) / Math.PI * 180 + (dy<0 ? 180 : 0))
        }
        cmChangeTurn(args,util){
            util.target[turn] += Number(args.a)
        }
        cmSetTurn(args,util){
            util.target[turn] = Number(args.a)
        }

        rXY(args,util){
            return [util.target.x,util.target.y];
        }
        rSpeed(args,util){
            return util.target[speed]
        }
        rDirection(ars,util){
            return util.target[dt]
        }
        rTurn(args,util){
            return util.target[turn]
        }
    }

    window.tempExt = {
        Extension: MotionPro,
        info: {
            name: "MotionPro.name",
            description: "MotionPro.descp",
            extensionId: MotionProextensionId,
            iconURL: MotionPropicture,
            insetIconURL: MotionProicon,
            featured: true,
            disabled: false,
            collaborator: "bilioicik @ CCW",
            collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
        },
        l10n: {
            "zh-cn": {
                "MotionPro.name": "运动pro",
                "MotionPro.descp": "向前移动"
            },
            en: {
                "MotionPro.name": "Motion pro",
                "MotionPro.descp": "Moving Onwards"
            }
        }
    }
})(Scratch);
