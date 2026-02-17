/*
حقوق الطبع محفوظة
هذا الملف وكل ما يحتويه ملكية فكرية لقناة أفلاك العلمية
ولا يسمح نسخها او اعادة استخدامها او تغييرها بدون إذن مسبق من القناة
*/

function calculateAll() {
    // 1. التحقق من تعبئة جميع المدخلات الإلزامية
    const inputs = document.querySelectorAll('input[required]');
    for (let input of inputs) {
        if (!input.value || input.value.trim() === "") {
            alert("الرجاء إدخال جميع المدخلات المطلوبة");
            return; 
        }
    }

    // قراءة المدخلات
    const B2 = parseFloat(document.getElementById('B2').value);
    const B3 = parseFloat(document.getElementById('B3').value);
    const B4 = parseFloat(document.getElementById('B4').value);
    const B5dateInput = document.getElementById('B5date');
    const B5date = B5dateInput.valueAsDate;
    
    const B5 = Math.floor((B5date - new Date(1899, 11, 30)) / 86400000);
    const B151 = parseFloat(document.getElementById('B151').value);
    const B152 = parseFloat(document.getElementById('B152').value);
    const B153 = parseFloat(document.getElementById('idB153').value);
    const B154 = parseFloat(document.getElementById('B154').value);
    const B12 = 90.8309;	   

    const rad = Math.PI / 180;
    const deg = 180 / Math.PI;
    const INT = Math.floor;
    const SQRT = Math.sqrt;
    const MOD = (n, m) => ((n % m) + m) % m;

    // --- الحسابات التفصيلية ---
    const B14 = (12+B4-B3/15)/24;
    const B15 = B5+2415018.5+B14-B4/24;
    const B16 = (B15-2451545)/36525;
    const B17 = MOD(280.46646+B16*(36000.76983+B16*0.0003032), 360);
    const B18 = 357.52911+B16*(35999.05029 - 0.0001537*B16);
    const B19 = 0.016708634-B16*(0.000042037+0.0000001267*B16);
    const B20 = Math.sin(rad*(B18))*(1.914602-B16*(0.004817+0.000014*B16))+Math.sin(rad*(2*B18))*(0.019993-0.000101 *B16)+Math.sin(rad*(3*B18))*0.000289;
    const B21 = B17+B20;
    const B22 = B21-0.00569-0.00478*Math.sin(rad*(125.04-1934.136*B16));
    const B23 = 23+(26+((21.448-B16*(46.815+B16*(0.00059-B16*0.001813))))/60)/60;
    const B24 = B23+0.00256*Math.cos(rad*(125.04-1934.136*B16));
    const B26 = deg*(Math.asin(Math.sin(rad*(B24))*Math.sin(rad*(B22))));
    const B27 = Math.tan(rad*(B24/2))*Math.tan(rad*(B24/2));
    const B28 = 4*deg*(B27*Math.sin(2*rad*(B17))-2*B19*Math.sin(rad*(B18))+4*B19*B27*Math.sin(rad*(B18))*Math.cos(2*rad*(B17))-0.5*B27*B27*Math.sin(4*rad*(B17))-1.25*B19*B19*Math.sin(2*rad*(B18)));
    const B29 = (720-4*B3-B28+B4*60)/1440;
    const B30 = deg*(Math.acos(Math.cos(rad*(B12))/(Math.cos(rad*(B2))*Math.cos(rad*(B26)))-Math.tan(rad*(B2))*Math.tan(rad*(B26))));
    const B31 = (B29*1440+B30*4)/1440;
    const B43 = deg*(Math.asin(Math.sin(rad*(B24))*Math.sin(rad*(B22))));
    const B44 = deg*(Math.acos(Math.cos(rad*(B12))/(Math.cos(rad*(B2))*Math.cos(rad*(B43)))-Math.tan(rad*(B2))*Math.tan(rad*(B43))));
    const B45 = (B29*1440+B44*4)/1440;
    const B48 = 4*deg*(B27*Math.sin(2*rad*(B17))-2*B19*Math.sin(rad*(B18))+4*B19*B27*Math.sin(rad*(B18))*Math.cos(2*rad*(B17))-0.5*B27*B27*Math.sin(4*rad*(B17))-1.25*B19*B19*Math.sin(2*rad*(B18)));
    const B49 = MOD(B31*1440+B48+4*B3-60*B4, 1440);
    const B50 = (B49/4<0) ? (B49/4+180) : (B49/4-180);
    const B51 = deg*(Math.acos(Math.sin(rad*(B2))*Math.sin(rad*(B26))+Math.cos(rad*(B2))*Math.cos(rad*(B26))*Math.cos(rad*(B50))));
    const B52 = (B50>0) ? MOD(deg*(Math.acos(((Math.sin(rad*(B2))*Math.cos(rad*(B51)))-Math.sin(rad*(B26)))/(Math.cos(rad*(B2))*Math.sin(rad*(B51)))))+180, 360) : MOD(540-deg*(Math.acos(((Math.sin(rad*(B2))*Math.cos(rad*(B51)))-Math.sin(rad*(B26)))/(Math.cos(rad*(B2))*Math.sin(rad*(B51))))), 360);
    const B59 = B5+2415018.5+B45-B4/24;
    const B60 = (B59-2451545)/36525;
    const B61 = MOD(280.46061837+360.98564736629*(B59-2451545)+0.000387933*Math.pow(B60,2)-Math.pow(B60,3)/38710000+B3, 360);
    const B64 = 2*Math.PI*(0.374897+1325.55241*B60 - INT(0.374897+1325.55241*B60));
    const B65 = 2*Math.PI*(0.993133+99.997361*B60 - INT(0.993133+99.997361*B60));
    const B66 = 2*Math.PI*(0.827361+1236.853086*B60 - INT(0.827361+1236.853086*B60));
    const B67 = 2*Math.PI*(0.259086+1342.227825*B60 - INT(0.259086+1342.227825*B60));
    const B63 = 22640*Math.sin(B64)-4586*Math.sin(B64-2*B66)+2370*Math.sin(2*B66)+769*Math.sin(2*B64)-668*Math.sin(B65)-412*Math.sin(2*B67)-212*Math.sin(2*B64-2*B66)-206*Math.sin(B64+B65-2*B66)+192*Math.sin(B64+2*B66)-165*Math.sin(B65-2*B66)-125*Math.sin(B66)-110*Math.sin(B64+B65)+148*Math.sin(B64-B65)-55*Math.sin(2*B67-2*B66);
    const B71 = 2*Math.PI*( (0.606433+1336.855225*B60 - INT(0.606433+1336.855225*B60)) +B63/1296000-INT((0.606433+1336.855225*B60 - INT(0.606433+1336.855225*B60))+B63/1296000));
    const B73 = (18520*Math.sin(B67+(B63+412*Math.sin(2*B67)+541*Math.sin(B65))/206264.8062)+(-526*Math.sin(B67-2*B66)+44*Math.sin(B64+B67-2*B66)-31*Math.sin(-B64+B67-2*B66)))/206264.8062;
    const B80 = deg*(Math.asin(Math.sin(B73)*Math.cos(rad*((23.4393-46.815*B60/3600)))+Math.cos(B73)*Math.sin(rad*((23.4393-46.815*B60/3600)))*Math.sin(B71)));
    const B81 = MOD(deg*Math.atan2(Math.cos(B73)*Math.sin(B71)*Math.cos(rad*((23.4393-46.815*B60/3600)))-Math.sin(B73)*Math.sin(rad*((23.4393-46.815*B60/3600))), Math.cos(B73)*Math.cos(B71)), 360)/15;
    const B82 = MOD(B61-15*B81, 360);
    const B83 = 0.950724+0.051818*Math.cos(B64);
    const B84 = deg*(Math.asin(Math.cos(rad*B2)*Math.cos(rad*B80)*Math.cos(rad*B82)+Math.sin(rad*B2)*Math.sin(rad*B80)));
    const B85 = deg*(Math.asin((0.9983271+0.0016764*Math.cos(rad*(2*B2)))*Math.cos(rad*(B84))*Math.sin(rad*(B83))));
    const B86 = B84-B85;
    const B56 = B86+1.02/(Math.tan(rad*((B86+10.3/(B86+5.11))))*60);
    const B87 = MOD(280.4664567 + 360007.6982779*B60/10, 360);
    const B88 = B87 + 1.9146*Math.sin(B65);
    const B89 = deg*(Math.acos(Math.cos(B71-rad*(B88))*Math.cos(B73)));
    const B90 = 180 - B89;
    const B57 = 100*(1+Math.cos(rad*(B90)))/2;
    const B91 = Math.sin(rad*(B82));
    const B92 = Math.cos(rad*(B82))*Math.sin(rad*(B2)) - Math.tan(rad*(B80))*Math.cos(rad*(B2));
    const B93 = MOD(deg*(Math.atan2(B91,B92))+360, 360);
    const B58 = (B82>180) ? (B93-180) : (B93+180);
    const B42 = MOD(deg*(Math.atan2(Math.cos(rad*(23.439))*Math.sin(rad*B88), Math.cos(rad*B88)))+360, 360);
    const B107 = B81*15;
    const B117 = B89/360*29.53;
    const B118 = (B107 + ((B107-B42 < -180) ? 360 : 0) > B42) ? B117 : -B117;
    const B119 = B118*24;
    const B120 = (B56+0.833)/Math.cos(rad*(B2))*24/(360-12.19);
    const B141 = (B57/100 < 0.1) ? (((B107 + ((B107 - B42 < -180) ? 360 : 0)) > B42) ? "نعم" : "لا") : "نعم";
    
    // --- منطقة العرض  ---
    const finalDiv = document.getElementById('finalResult');
    const secondColumn = document.querySelectorAll('.card')[1]; // العمود الثاني (المعايير المحسوبة)
    finalDiv.style.display = "block";

    // التحقق من عمر القمر 
    if (B117 >= 2 && B117 <= 28) {
        finalDiv.className = "final-res fail";
        finalDiv.innerText = "هذه الصفحة لحساب هلال اول الشهر";
        
        // إخفاء النتائج
        secondColumn.querySelectorAll('.val').forEach(el => el.innerText = "-");
    } else {
        // عرض النتائج الطبيعية
        document.getElementById('rB118').innerText = (B118 > 1 ? (INT(B118) + " يوم ") : "") + Math.round(MOD(B118*10, 1)/10*24) + " ساعة";
        document.getElementById('rB120').innerText = (B120 * 60).toFixed(0) + " دقيقة";
        document.getElementById('rB57').innerText = B57.toFixed(1) + "%";
        document.getElementById('rB141').innerText = B141;
        document.getElementById('rB155').innerText = (B56 > 0.1) ? "نعم" : "لا";

        const cond1 = B56 >= B151;
        const cond2 = B141 === "نعم";
        const cond3 = B89 >= B152;
        const cond4 = B119 >= B153;
        const cond5 = B120*60 >= B154;

        if (cond1 && cond2 && cond3 && cond4 && cond5) {
            finalDiv.className = "final-res success";
            finalDiv.innerText = "النتيجة: تحقق الشروط الفلكية - غدًا هو أول أيام الشهر الهجري";
        } else {
            finalDiv.className = "final-res fail";
            finalDiv.innerText = "النتيجة: لم تتحقق الشروط - غدًا هو المكمل للشهر الحالي";
        }
    }

    // تحديث بيانات العمود الأول 
    let B45date_obj = new Date(B45 * 86400*1000); 
    document.getElementById('rB45').innerText = B45date_obj.toISOString().substr(11, 8);
    document.getElementById('rB52').innerText = B52.toFixed(0) + "°";
    document.getElementById('rB58').innerText = B58.toFixed(0) + "°";
    document.getElementById('rB89').innerText = B89.toFixed(1) + "°";
    document.getElementById('rB56').innerText = B56.toFixed(1) + "°";
}


