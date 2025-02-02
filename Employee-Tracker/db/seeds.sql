INSERT INTO department (department_name)
VALUES 
        ('club'),
        ('influence'),
        ('corporate');

INSERT INTO role (title, salary, department_id)
VALUES 
        ('bartender', 30000, 1),
        ('dj', 1000000, 1),
        ('bouncer', 46000, 1),
        ('twitch_streamer', 200000, 2),
        ('podcaster', 400000, 2),
        ('influencer', 500000, 2),
        ('creative_director', 360000, 3),
        ('associate_undersecretary', 120000, 3),
        ('lead_acct_executive', 3400000, 3);

--dont for get to add in manager_id when you figure it out
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ('Moe', 'Szyslak', 1, NULL),
        ('Chris', 'Lake', 2, 1),
        ('Cobra', 'Bubbles', 3, 1),
        ('Tyler', 'Blevins', 4, NULL),
        ('Joe', 'Rogan', 5, NULL),
        ('Brittany', 'Broski', 6, NULL),
        ('Leonardo', 'DaVinci', 7, 9),
        ('April', 'Ludgate', 8, 9),
        ('Ru', 'Paul', 9, NULL)