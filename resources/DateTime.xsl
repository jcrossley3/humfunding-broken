<?xml version="1.0" encoding="UTF-8"?>
<!--
XSL Date and Time Functions 1.09
Written by Katy Coe
(c) Intelligent Streaming 2006-2007

NO UNAUTHORIZED COPYING OR DISTRIBUTION
COMMERCIAL USERS MUST BUY A LICENSE
View licensing details and prices at: http://www.djkaty.com
-->

<!DOCTYPE xsl:stylesheet [
  <!ENTITY iso-params '
        <xsl:param xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="date-time" select="&apos;1970-01-01T00:00:00+00:00&apos;" />
        
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="date" select="substring-before($date-time,&apos;T&apos;)" />
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="year" select="substring-before($date,&apos;-&apos;)" />
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="month" select="substring-before(substring-after($date,&apos;-&apos;),&apos;-&apos;)" />
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="day" select="substring-after(substring-after($date,&apos;-&apos;),&apos;-&apos;)" />
        
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="time" select="substring(substring-after($date-time,&apos;T&apos;),1,8)" />
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="hour" select="substring-before($time,&apos;:&apos;)" />
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="minute" select="substring-before(substring-after($time,&apos;:&apos;),&apos;:&apos;)" />
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="second" select="substring-after(substring-after($time,&apos;:&apos;),&apos;:&apos;)" />
        
        <xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="tzsign" select="substring(substring-after(substring-after($date-time,&apos;:&apos;),&apos;:&apos;), 3, 1)" />
        
		<xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="tzhour">
			<xsl:choose>
				<xsl:when test="contains($date-time,&apos;+&apos;)">
					<xsl:value-of select="substring-before(substring-after($date-time,&apos;+&apos;),&apos;:&apos;)" />
				</xsl:when>
				<xsl:when test="contains(substring-after($date-time,&apos;T&apos;),&apos;-&apos;)">
					<xsl:value-of select="concat(&apos;-&apos;, substring-before(substring-after(substring-after($date-time,&apos;T&apos;),&apos;-&apos;),&apos;:&apos;))" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="&apos;0&apos;" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		
		<xsl:variable xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="tzminute">
			<xsl:choose>
				<xsl:when test="contains($date-time,&apos;+&apos;)">
					<xsl:value-of select="substring-after(substring-after($date-time,&apos;+&apos;),&apos;:&apos;)" />
				</xsl:when>
				<xsl:when test="contains(substring-after($date-time,&apos;T&apos;),&apos;-&apos;)">
					<xsl:value-of select="concat(&apos;-&apos;, substring-after(substring-after(substring-after($date-time,&apos;T&apos;),&apos;-&apos;),&apos;:&apos;))" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="&apos;0&apos;" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>		
  '>
]>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns:func="http://exslt.org/functions"
                xmlns:is-date="http://www.intelligentstreaming.com/xsl/date-time"
                extension-element-prefixes="func"
				exclude-result-prefixes="func is-date">
	
	<!-- =============================================================================== -->
	<!-- Look-up tables -->
	<!-- =============================================================================== -->
    
	<xsl:variable name="is-date:days" select="document('')/*/is-date:day" />
	
	<is-date:day day="0" name="Sunday" shortname="Sun" />
	<is-date:day day="1" name="Monday" shortname="Mon" />
	<is-date:day day="2" name="Tuesday" shortname="Tue" />
	<is-date:day day="3" name="Wednesday" shortname="Wed" />
	<is-date:day day="4" name="Thursday" shortname="Thu" />
	<is-date:day day="5" name="Friday" shortname="Fri" />
	<is-date:day day="6" name="Saturday" shortname="Sat" />

	<xsl:variable name="is-date:months" select="document('')/*/is-date:month" />
	
	<is-date:month month="1" name="January" />
	<is-date:month month="2" name="February" />
	<is-date:month month="3" name="March" />
	<is-date:month month="4" name="April" />
	<is-date:month month="5" name="May" />
	<is-date:month month="6" name="June" />
	<is-date:month month="7" name="July" />
	<is-date:month month="8" name="August" />
	<is-date:month month="9" name="September" />
	<is-date:month month="10" name="October" />
	<is-date:month month="11" name="November" />
	<is-date:month month="12" name="December" />
	
	<xsl:variable name="is-date:abbr-months" select="document('')/*/is-date:abbr-month" />
	
	<is-date:abbr-month month="1" name="Jan" />
	<is-date:abbr-month month="2" name="Feb" />
	<is-date:abbr-month month="3" name="Mar" />
	<is-date:abbr-month month="4" name="Apr" />
	<is-date:abbr-month month="5" name="May" />
	<is-date:abbr-month month="6" name="Jun" />
	<is-date:abbr-month month="7" name="Jul" />
	<is-date:abbr-month month="8" name="Aug" />
	<is-date:abbr-month month="9" name="Sep" />
	<is-date:abbr-month month="10" name="Oct" />
	<is-date:abbr-month month="11" name="Nov" />
	<is-date:abbr-month month="12" name="Dec" />
	
	<xsl:variable name="is-date:dates" select="document('')/*/is-date:date" />
	
	<is-date:date date="1" name="1st" />
	<is-date:date date="2" name="2nd" />
	<is-date:date date="3" name="3rd" />
	<is-date:date date="4" name="4th" />
	<is-date:date date="5" name="5th" />
	<is-date:date date="6" name="6th" />
	<is-date:date date="7" name="7th" />
	<is-date:date date="8" name="8th" />
	<is-date:date date="9" name="9th" />
	<is-date:date date="10" name="10th" />
	<is-date:date date="11" name="11th" />
	<is-date:date date="12" name="12th" />
	<is-date:date date="13" name="13th" />
	<is-date:date date="14" name="14th" />
	<is-date:date date="15" name="15th" />
	<is-date:date date="16" name="16th" />
	<is-date:date date="17" name="17th" />
	<is-date:date date="18" name="18th" />
	<is-date:date date="19" name="19th" />
	<is-date:date date="20" name="20th" />
	<is-date:date date="21" name="21st" />
	<is-date:date date="22" name="22nd" />
	<is-date:date date="23" name="23rd" />
	<is-date:date date="24" name="24th" />
	<is-date:date date="25" name="25th" />
	<is-date:date date="26" name="26th" />
	<is-date:date date="27" name="27th" />
	<is-date:date date="28" name="28th" />
	<is-date:date date="29" name="29th" />
	<is-date:date date="30" name="30th" />
	<is-date:date date="31" name="31st" />
    
    <xsl:variable name="is-date:dstlesstz" select="document('')/*/is-date:dstlesstz" />
    
    <is-date:dstlesstz tz="-10:00" name="HST" />
    <is-date:dstlesstz tz="-09:00" name="YST" />
    <is-date:dstlesstz tz="-08:00" name="PST" />
    <is-date:dstlesstz tz="-07:00" name="MST" />
    <is-date:dstlesstz tz="-06:00" name="CST" />
    <is-date:dstlesstz tz="-05:00" name="EST" />
    <is-date:dstlesstz tz="-04:00" name="AST" />
    <is-date:dstlesstz tz="-03:30" name="NT" />
    <is-date:dstlesstz tz="+00:00" name="GMT" />
    <is-date:dstlesstz tz="+01:00" name="CET" />
    <is-date:dstlesstz tz="+02:00" name="EET" />
    <is-date:dstlesstz tz="+03:00" name="MSK" />
    <is-date:dstlesstz tz="+09:00" name="JST" />
    <is-date:dstlesstz tz="+09:30" name="ACST" />
    <is-date:dstlesstz tz="+12:00" name="NZST" />    

	<!-- =============================================================================== -->
	<!-- Time and date functions -->
	<!-- =============================================================================== -->
    
    <!-- ** Calculate UNIX timestamp from date information
	     *
         * UNIX timestamp code adapted from: bttp://www.autohotkey.com/forum/topic2633.html
         * Yearday code adapted from month-end code in XSLT Cookbook, O'Reilly
		 * UNIX timestamp is the mumber of seconds since 1970-01-01T00:00:00 UTC
		 *
		 * @param date-time ISO date to convert
		 * @return UNIX timestamp
		 * -->
    <func:function name="is-date:unix-from-iso">
		&iso-params;
		
        <xsl:variable name="yday-unadjusted" select="substring('000031059090120151181212243273304334', 3 * $month - 2, 3) + $day" />
		<xsl:variable name="yday">
			<xsl:choose>
				<xsl:when test="$year mod 4 = 0 and $month = 2 and $day = 29">
					<xsl:value-of select="$yday-unadjusted - 1" />
				</xsl:when>
				<xsl:when test="$year mod 4 = 0 and $yday-unadjusted &lt;= 59">
					<xsl:value-of select="$yday-unadjusted - 1" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$yday-unadjusted" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

        <func:result select="($year - 1970)*31536000 + ($yday + floor(($year - 1972) div 4))*86400 + $hour*3600 + $minute*60 + $second - $tzhour*3600 - $tzminute*60" />
    </func:function>
	
	<!-- ** Calculate UTC ISO8601 date from UNIX timestamp
	     *
		 * @param unix UNIX timestamp to convert
		 * @return ISO formatted date in GMT/UTC
		 * -->
	<func:function name="is-date:iso-from-unix">
		<xsl:param name="unix" />
		
		<!-- Calculate number of leap years that have passed before the previous year -->
		<xsl:variable name="unix-numleapdays" select="floor(($unix - 94694400) div 126230400) + 1"/>
		
		<!-- Year, taking previous leap years into account but not taking into account that current year might be a leap year -->
		<xsl:variable name="year-temp" select="floor(($unix - $unix-numleapdays * 86400) div 31536000) + 1970" />
		
		<!-- Meaningless most of the time; on 31st December of a leap year, gives a value between 1 and 86399 indicating the
		     number of seconds we are beyond a 365-day year; $year-temp above will incorrectly give the following year on
			 31st December of leap years because the year has more than 31536000 seconds, so this is used as a correction
			 factor -->
		<xsl:variable name="extra-seconds-this-year" select="$unix - $unix-numleapdays * 86400 - ($year-temp - 1970) * 31536000" />
		
		<xsl:variable name="year">
			<xsl:choose>
				<xsl:when test="($year-temp mod 4 = 1) and $extra-seconds-this-year > 0 and $extra-seconds-this-year &lt; 86400">
					<xsl:value-of select="$year-temp - 1" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$year-temp" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		
		<xsl:variable name="hour" select="floor(($unix mod 86400) div 3600)" />
		<xsl:variable name="minute" select="floor(($unix mod 3600) div 60)" />
		<xsl:variable name="second" select="$unix mod 60" />
		
		<!-- The day of the year from 1-366, taking into account previous leap years -->
		<xsl:variable name="yday" select="floor(($unix - ($year - 1970)*31536000) div 86400) - $unix-numleapdays + 1" />
		
		<!-- The day of the year for the purposes of calculating a display month -->
		<!-- Shifts all leap year days from and including 29th February back one day
		     so the normal month/date lookup tables can be used -->
		<xsl:variable name="yday-leap">
			<xsl:choose>
				<xsl:when test="$yday >= 60 and $year mod 4 = 0">
					<xsl:value-of select="$yday - 1" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$yday" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		
		<!-- Work out month from leap-adjusted year day -->
		<xsl:variable name="month">
			<xsl:choose>
				<xsl:when test="$yday-leap &lt;= 31">1</xsl:when>
				<xsl:when test="$yday-leap &lt;= 59">2</xsl:when>
				<xsl:when test="$yday-leap &lt;= 90">3</xsl:when>
				<xsl:when test="$yday-leap &lt;= 120">4</xsl:when>
				<xsl:when test="$yday-leap &lt;= 151">5</xsl:when>
				<xsl:when test="$yday-leap &lt;= 181">6</xsl:when>
				<xsl:when test="$yday-leap &lt;= 212">7</xsl:when>
				<xsl:when test="$yday-leap &lt;= 243">8</xsl:when>
				<xsl:when test="$yday-leap &lt;= 273">9</xsl:when>
				<xsl:when test="$yday-leap &lt;= 304">10</xsl:when>
				<xsl:when test="$yday-leap &lt;= 334">11</xsl:when>
				<xsl:otherwise>12</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		
		<!-- Lookup date from table; day 60 of leap years is 29th February -->
		<xsl:variable name="date">
			<xsl:choose>
				<xsl:when test="$yday != 60 or $year mod 4 != 0">
					<xsl:value-of select="$yday-leap - substring('000031059090120151181212243273304334', 3 * $month - 2, 3)" />
				</xsl:when>
				<xsl:otherwise>29</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		
		<func:result select="concat($year, '-',
						format-number($month, '00'), '-',
						format-number($date, '00'), 'T',
						format-number($hour, '00'), ':',
						format-number($minute, '00'), ':',
						format-number($second, '00'), '+00:00')" />
	</func:function>
	
	<!-- ** Calculate day of the week from date/month/year
	     *
		 * Adapted from XSLT Cookbook, pg. 77
		 *
		 * @param year 4-digit year number
		 * @param month Month in the year (1-12)
		 * @param date Date in the month
		 * @return Integer from 0-6 representing the day of the week (0 = Sunday)
		 * -->
	<func:function name="is-date:day-of-week">
		<xsl:param name="year" />
		<xsl:param name="month" />
		<xsl:param name="date" />
		
		<xsl:variable name="a" select="floor((14 - $month) div 12)" />
		<xsl:variable name="y" select="$year - $a" />
		<xsl:variable name="m" select="$month + 12 * $a - 2" />
		
		<func:result select="($date + $y + floor($y div 4) - floor($y div 100) + floor($y div 400) + floor((31 * $m) div 12)) mod 7" />
	</func:function>
    
    <!-- ** Calculate day of the week from an ISO timestamp, ignoring timezone
         *
		 * @param date-time ISO date to use
		 * @return Integer from 0-6 representing the day of the week (0 = Sunday)
		 * -->
    <func:function name="is-date:day-of-week-from-iso">
		&iso-params;
        
        <func:result select="is-date:day-of-week($year, $month, $day)" />
    </func:function>
	
    <!-- ** Calculate day of the week in UTC from an ISO timestamp
         *
		 * @param date-time ISO date to use
		 * @return Integer from 0-6 representing the day of the week (0 = Sunday)
		 * -->
    <func:function name="is-date:day-of-week-utc-from-iso">
		&iso-params;
        
        <xsl:variable name="date-time-iso" select="is-date:iso-from-unix(is-date:unix-from-iso($date-time))" />

        <func:result select="is-date:day-of-week(
                      substring($date-time-iso, 1, 4),
                      substring($date-time-iso, 6, 2),
                      substring($date-time-iso, 9, 2))" />
    </func:function>
	
	<!-- ** Calculate date of first weekday in month (0=Sunday) when the 1st of the month is day x (0=Sunday)
	     *
		 * @param firstOfMonthDay The day (0-6 where 0 = Sunday) of the 1st of the month
		 * @param wantedDay The date for which to calculate the weekday (must be in the range 1-7)
		 * @return The day (0-6 where 0 = Sunday) of the date specified in $wantedDay
		 * -->
	<func:function name="is-date:date-of-first-day">
		<xsl:param name="firstOfMonthDay" />
		<xsl:param name="wantedDay" />
		
		<func:result select="(($wantedDay - $firstOfMonthDay + 7) mod 7) + 1" />
	</func:function>
	
	<!-- ** Calculate date of last weekday in month (0=Sunday) when the last of the month is day x (0=Sunday)
	     *
		 * @param lastOfMonthDay The day (0-6 where 0 = Sunday) of the last date of the month
		 * @param wantedDay The date for which to calculate the weekday (must be in the last 7 days of the month)
		 * @return The day (0-6 where 0 = Sunday) of the date specified in $wantedDay
		 * -->
	<func:function name="is-date:date-of-last-day">
		<xsl:param name="lastOfMonthDay" />
		<xsl:param name="wantedDay" />
		<xsl:param name="daysInMonth" />
		
		<func:result select="$daysInMonth - ((($lastOfMonthDay - $wantedDay) + 7) mod 7)" />
	</func:function>
    
    <!-- ** Calculate the week number in the given month from an ISO timestamp, ignoring timezone
         *
         * @param date-time ISO date to use
         * @return Integer from 1-5 representing the week number in the month
         * -->
    <func:function name="is-date:week-number-in-month-from-iso">
        &iso-params;
        
        <func:result select="ceiling($day div 7)" />
    </func:function>
	
    <!-- ** Calculate the week number in the given month in UTC from an ISO timestamp
         *
         * @param date-time ISO date to use
         * @return Integer from 1-5 representing the week number in the month
         * -->
    <func:function name="is-date:week-number-in-month-utc-from-iso">
        &iso-params;
        
        <xsl:variable name="date-time-iso" select="is-date:iso-from-unix(is-date:unix-from-iso($date-time))" />

        <func:result select="ceiling(substring($date-time-iso, 9, 2) div 7)" />
    </func:function>
	
	<!-- ** Daylight savings offset calculator
	     *
		 * Returns positive number of seconds to subtract from a local time to eliminate any DST offset
		 * (in other words, returns the DST offset from standard (winter) time which the supplied local time has)
		 * NOTE: Works only for timezones which change on the hour (xx:00:00) and use 1-hour DST offsets.
		 *
		 * @param timezone ISO8601-formatted timezone, eg. +HH:MM or -HH:MM (only HH is used)
		 * @param dstRules "eu" for European ruleset, "us" for American ruleset
		 * @param date-time ISO8601 local time to calculate offset for
		 * @return The DST offset in seconds (in winter time, zero, in summertime, usually 3600)
		 * -->
	<func:function name="is-date:dst-offset">
		<xsl:param name="timezone" />
		<xsl:param name="dstRules" />
		&iso-params;

		<func:result>
			<xsl:choose>
				<!-- EU DST: last Sunday in March 1am UTC to the last Sunday in October 1am UTC -->
				<!-- http://webexhibits.org/daylightsaving/g.html -->
				<xsl:when test="$dstRules='eu'">
					<xsl:variable name="lastSundayInMarch"
								  select="is-date:date-of-last-day(is-date:day-of-week($year, 3, 31), 0, 31)" />

					<xsl:variable name="lastSundayInOctober"
								  select="is-date:date-of-last-day(is-date:day-of-week($year, 10, 31), 0, 31)" />

					<xsl:choose>
						<xsl:when test="
							($month >= 4 and $month &lt;= 9) or
							($month = 3 and $day > $lastSundayInMarch) or
							($month = 3 and $day = $lastSundayInMarch and $hour - substring($timezone, 2, 2) >= 1) or
							($month = 10 and $day &lt; $lastSundayInOctober) or
							($month = 10 and $day = $lastSundayInOctober and $hour - substring($timezone, 2, 2) &lt; 1)">
							<xsl:value-of select="'3600'" />
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="'0'" />
						</xsl:otherwise>
					</xsl:choose>
				</xsl:when>
				
				<!-- US/Canada DST: first Sunday in April 2am local to the last Sunday in October 2am local -->
				<!-- From 2007: second Sunday in March 2am local to the first Sunday in November 2am local -->
				<!-- http://wwp.greenwichmeantime.com/time-zone/rules/usa.htm -->
				<xsl:when test="$dstRules='us'">
					<xsl:variable name="firstSundayInApril"
								  select="is-date:date-of-first-day(is-date:day-of-week($year, 4, 1), 0)" />

					<xsl:variable name="lastSundayInOctober"
								  select="is-date:date-of-last-day(is-date:day-of-week($year, 10, 31), 0, 31)" />

					<xsl:variable name="secondSundayInMarch"
								  select="is-date:date-of-first-day(is-date:day-of-week($year, 3, 1), 0) + 7" />
					
					<xsl:variable name="firstSundayInNovember"
								  select="is-date:date-of-first-day(is-date:day-of-week($year, 11, 1), 0)" />

					<xsl:choose>
						<xsl:when test="
							((($month >= 5 and $month &lt;= 9) or
							($month = 4 and $day > $firstSundayInApril) or
							($month = 4 and $day = $firstSundayInApril and $hour >= 2) or
							($month = 10 and $day &lt; $lastSundayInOctober) or
							($month = 10 and $day = $lastSundayInOctober and $hour &lt; 2))
							and $year &lt; 2007)
							or
							((($month >= 4 and $month &lt;= 10) or
							($month = 3 and $day > $secondSundayInMarch) or
							($month = 3 and $day = $secondSundayInMarch and $hour >= 2) or
							($month = 11 and $day &lt; $firstSundayInNovember) or
							($month = 11 and $day = $firstSundayInNovember and $hour &lt; 2))
							and $year >= 2007)">
							<xsl:value-of select="'3600'" />
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="'0'" />
						</xsl:otherwise>
					</xsl:choose>
				</xsl:when>
			</xsl:choose>
		</func:result>
	</func:function>

	<!-- ** Correct UTC/GMT timestamp without DST adjustment for DST changes
		 *
		 * @param timestamp UNIX timestamp of date-time to adjust
		 * @param dstRules The DST ruleset to use ('eu' or 'us')
		 * @return The timestamp corrected for DST. If in summertime according to the selected ruleset, the summertime offset (usually 1 hour) will be subtracted; in wintertime, the return value will be the same as the input.
		 * -->
	<func:function name="is-date:dst-adjust">
		<xsl:param name="timestamp" />
		<xsl:param name="dstRules" />

		<func:result select="$timestamp - is-date:dst-offset('+00:00', $dstRules, is-date:iso-from-unix($timestamp))" />
	</func:function>

	<!-- ** Correct ISO timestamp without DST adjustment for DST changes
	     *
		 * @param timestamp ISO timestamp of date-time to adjust
		 * @param dstRules The DST ruleset to use ('eu' or 'us')
		 * @return UNIX timestamp corrected for DST. If in summertime according to the selected ruleset, the summertime offset (usually 1 hour) will be subtracted; in wintertime, the return value will be the same as the input
		 * -->
	<func:function name="is-date:dst-adjust-from-iso">
		<xsl:param name="timestamp" />
		<xsl:param name="dstRules" />
	
		<func:result select="is-date:unix-from-iso($timestamp) - is-date:dst-offset(substring($timestamp,20,6), $dstRules, $timestamp)" />
	</func:function>

	<!-- ** Adds potentially non-even intervals of time to an existing time
	     *
		 * NOTE: For adding months keeping the same day of the week (Xmd format), handling of 29th-31st
		 * is not guaranteed to be correct
		 *
		 * @param ai-date-time Start date and time as an ISO8601 format date
		 * @param expr Interval expression: "2" or "+2" for 2 days, "-2" for back 2 days, "2md" for 2 months keeping same day of week
		 * @param intervals Number of intervals to add
		 * @return ISO8601 timestamp of the newly calculated date-time
		 * -->
	<func:function name="is-date:add-interval">
		<xsl:param name="ai-date-time" />
		<xsl:param name="expr" />
		<xsl:param name="intervals" select="'1'" />
		
        <xsl:variable name="ai-date" select="substring-before($ai-date-time,'T')" />
        <xsl:variable name="ai-year" select="substring-before($ai-date,'-')" />
        <xsl:variable name="ai-month" select="substring-before(substring-after($ai-date,'-'),'-')" />
        <xsl:variable name="ai-day" select="substring-after(substring-after($ai-date,'-'),'-')" />
		
		<xsl:choose>
			<!-- Interval is a number of months, but keeping the same day of the week,
			     eg. if the date supplied is the 2nd Wednesday of the month, we want to
				 find the 2nd Wednesday of the following month etc. -->
			<xsl:when test="contains($expr,'md')">
				
				<!-- Get the day of the week on which the date falls -->
				<xsl:variable name="day-of-week" select="is-date:day-of-week($ai-year, $ai-month, $ai-day)" />
				
				<!-- Get the number of months to add -->
				<xsl:variable name="num-months" select="substring-before($expr, 'md') * $intervals" />
				
				<!-- Calculate the new year and month numbers -->
				<xsl:variable name="new-year" select="$ai-year + floor(($ai-month - 1 + $num-months) div 12)" />
				<xsl:variable name="new-month" select="(($ai-month - 1 + $num-months) mod 12) + 1" />
				
				<!-- Get the date of the first $day-of-week (eg. Wednesday) of the target month -->
				<xsl:variable name="first-of-week-day" select="is-date:date-of-first-day(is-date:day-of-week($new-year, $new-month, 1), $day-of-week)" />
				
				<!-- Calculate how many weeks into the month the original date falls
				     (eg. 1st, 2nd, 3rd Wednesday) -->
				<xsl:variable name="week-offset" select="floor(($ai-day - 1) div 7)" />
				
				<!-- Create an ISO timestamp of the new date and conver to UNIX timestamp -->
				<func:result select="
								concat($new-year, '-',
								format-number($new-month, '00'), '-',
								format-number($first-of-week-day + $week-offset * 7, '00'), 'T',
								substring-after($ai-date-time, 'T'))" />
			</xsl:when>
			
			<!-- Interval is a fixed number of days -->
			<xsl:otherwise>
			    <xsl:variable name="stampWithoutTZ" select="concat(substring($ai-date-time, 1, 19), '+00:00')" />
			    <xsl:variable name="intervalAdded" select="is-date:unix-from-iso($stampWithoutTZ) + 86400*$expr*$intervals" />
				<func:result select="concat(substring(is-date:iso-from-unix($intervalAdded), 1, 19),
				                            substring($ai-date-time, 20, 6))" />
			</xsl:otherwise>
		</xsl:choose>
	</func:function>
    
    <!-- ** Convert a 24-hour time into 12-hour am/pm format
         *
         * @param time The time to convert in the form HHMM (0000-2359)
         * @return The converted time string (:00 minutes will be truncated)
         * -->
    <func:function name="is-date:time-ampm">
        <xsl:param name="time" />
        
        <xsl:variable name="minutes">
            <xsl:if test="substring($time, 3, 2) != 0">
                <xsl:value-of select="concat(':', substring($time, 3, 2))" />
            </xsl:if>
        </xsl:variable>
        
        <func:result>
            <xsl:if test="substring($time, 1, 2) > 12">
                <xsl:value-of select="concat(substring($time, 1, 2) - 12, $minutes, 'pm')" />
            </xsl:if>
            <xsl:if test="substring($time, 1, 2) = 12 and substring($time, 3, 2) != 0">
                <xsl:value-of select="concat('12', $minutes, 'pm')" />
            </xsl:if>
            <xsl:if test="substring($time, 1, 2) = 12 and substring($time, 3, 2) = 0">
                <xsl:text>midday</xsl:text>
            </xsl:if>
            <xsl:if test="substring($time, 1, 2) &lt; 12 and not(substring($time, 1, 2) = 0 and substring($time, 3, 2) = 0)">
                <xsl:value-of select="concat(number(substring($time, 1, 2)), $minutes, 'am')" />
            </xsl:if>
            <xsl:if test="substring($time, 1, 2) = 0 and substring($time, 3, 2) = 0">
                <xsl:text>midnight</xsl:text>
            </xsl:if>
        </func:result>
    </func:function>

    <!-- ** Convert a 24-hour time into 12-hour am/pm format from an ISO timestamp, ignoring timezone
         *
         * @param date-time The ISO timestamp containing the time to convert
         * @return The converted time string
         * -->
    <func:function name="is-date:time-ampm-from-iso">
        &iso-params;
        
        <func:result select="is-date:time-ampm(concat($hour, $minute))" />
    </func:function>
        
	<!-- ** Correct ISO timestamp into RFC-822 timestamp
	     *
		 * @param timestamp ISO timestamp to convert
		 * @return Converted RFC-822 timestamp
		 * -->
	<func:function name="is-date:rfc822-from-iso">
		&iso-params;
        
        <func:result select="concat($is-date:days[@day=is-date:day-of-week-from-iso($date-time)]/@shortname, ', ', $day, ' ', $is-date:abbr-months[@month=number($month)]/@name, ' ', $year, ' ', $time, ' ', $tzsign, $tzhour, $tzminute)" />
	</func:function>

	<!-- =============================================================================== -->
	<!-- Unit testing -->
	<!-- =============================================================================== -->
    
	<!-- Unit testing parameters -->
	<xsl:param name="testMode" select="''" />
	<xsl:param name="testArg1" select="''" />
	<xsl:param name="testArg2" select="''" />
	<xsl:param name="testArg3" select="''" />
    
	<!-- Unit testing entry point -->
	<xsl:template match="/TestMode">
		<xsl:choose>
			<xsl:when test="$testMode='iso8601-to-unix'">
				<xsl:value-of select="is-date:unix-from-iso($testArg1)" />
			</xsl:when>
			<xsl:when test="$testMode='unix-to-iso8601'">
				<xsl:value-of select="is-date:iso-from-unix($testArg1)" />
			</xsl:when>
			<xsl:when test="$testMode='day-of-week'">
				<xsl:value-of select="is-date:day-of-week($testArg1, $testArg2, $testArg3)" />
			</xsl:when>
			<xsl:when test="$testMode='dst-offset'">
				<xsl:value-of select="is-date:dst-offset($testArg1, $testArg2, $testArg3)" />
			</xsl:when>
			<xsl:when test="$testMode='add-interval'">
				<xsl:value-of select="is-date:add-interval($testArg1, $testArg2, $testArg3)" />
			</xsl:when>
		</xsl:choose>
    </xsl:template>
</xsl:stylesheet>