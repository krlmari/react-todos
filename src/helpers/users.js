export const groupedUsers = (data) =>
    data.reduce((acc, item) => {
        const id = item.userId;

        if (!acc[id]) {
            acc[id] = [];
        }

        acc[id].push(item);
        return acc;
    }, {});

export const sortedGroups = (data) =>
    Object.entries(data)
        .map(([userId, items]) => {
            let completedTrue = 0;
            let completedFalse = 0;

            items.forEach((item) => {
                if (item.completed) completedTrue += 1;
                else completedFalse += 1;
            });

            return { userId, completedTrue, completedFalse, items };
        })
        .sort((a, b) => {
            if (a.completedTrue !== b.completedTrue) {
                return b.completedTrue - a.completedTrue;
            } else {
                return a.userId - b.userId;
            }
        });
